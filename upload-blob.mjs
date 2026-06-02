import fs from 'fs';
import path from 'path';
import { put } from '@vercel/blob';

const videoDir = path.join(process.cwd(), 'public', 'videos');
const files = fs.readdirSync(videoDir).filter(f => f.endsWith('.mp4'));

const urlMap = {};

async function uploadVideos() {
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    console.error("❌ Error: BLOB_READ_WRITE_TOKEN is missing!");
    console.error("Make sure it is set in your environment variables.");
    process.exit(1);
  }

  console.log(`Found ${files.length} videos to upload...`);

  for (const file of files) {
    console.log(`Uploading "${file}"...`);
    const filePath = path.join(videoDir, file);
    const content = fs.readFileSync(filePath);
    
    const { url } = await put(file, content, { 
      access: 'public', 
      token: process.env.BLOB_READ_WRITE_TOKEN 
    });
    
    console.log(`✅ Uploaded to: ${url}`);
    urlMap[file] = url;
  }

  fs.writeFileSync('blob-urls.json', JSON.stringify(urlMap, null, 2));
  console.log('🎉 All uploads complete! URLs saved to blob-urls.json');
}

uploadVideos().catch(console.error);
