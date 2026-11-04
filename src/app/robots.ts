import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: [
          "Googlebot",
          "Google-Extended",
          "OAI-SearchBot",
          "GPTBot",
          "ChatGPT-User",
          "PerplexityBot",
          "ClaudeBot",
          "Bingbot",
          "Applebot-Extended",
        ],
        allow: "/",
      },
    ],
    sitemap: "https://dulshan.qzz.io/sitemap.xml",
    host: "https://dulshan.qzz.io",
  };
}

