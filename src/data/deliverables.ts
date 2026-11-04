export type DeliverableCategory = 'tvc' | '9-16' | 'realestate' | 'ident';

export interface DriveClip {
  label: string;
  fileId: string;
}

export interface Deliverable {
  id: string;
  tc: string;
  title: string;
  spec: string;
  client: string;
  agency?: string;
  role: string;
  tools: string[];
  format: string;
  category: DeliverableCategory;
  videoUrl?: string;
  previewStart?: number;
  previewDuration?: number;
  driveFileId?: string;
  driveClips?: DriveClip[];
  driveUrl?: string;
  overview: string;
  highlights: string[];
}

export const googleDriveVaultUrl =
  'https://drive.google.com/drive/folders/1QjmPmcbtumfi0bxWiI4cRIe-fToJtZPl?usp=drive_link';

export const getDriveFileViewUrl = (fileId: string) =>
  `https://drive.google.com/file/d/${fileId}/view?usp=drive_link`;

export const getDriveFilePreviewUrl = (fileId: string) =>
  `https://drive.google.com/file/d/${fileId}/preview`;

export const deliverables: Deliverable[] = [
  // ================= NATIONAL TVCs (8) =================
  {
    id: 'pb-remit-3d',
    tc: '#01',
    title: "People's Bank: People's Remittance TVC",
    spec: '3D Office & ATM, Chroma Key, 3D Tracking & Screen Replacement',
    client: "People's Bank",
    agency: 'Sky Films International',
    role: 'VFX Compositor, 3D & Motion Graphics Artist',
    tools: ['Blender', 'After Effects', 'Premiere Pro'],
    format: 'Broadcast TVC',
    category: 'tvc',
    videoUrl: '/videos/Peoples Remittance TV Commercial.mp4',
    previewStart: 2.0,
    previewDuration: 7.0,
    driveFileId: '1GfaGicRSz-Mk4nBml0sFspbdCWyDxRyb',
    driveUrl: getDriveFileViewUrl('1GfaGicRSz-Mk4nBml0sFspbdCWyDxRyb'),
    overview:
      'A comprehensive national television commercial post-production pipeline combining custom 3D environment construction with live-action chroma key integration.',
    highlights: [
      'Modeled a modern 3D corporate office interior and Self-Banking ATM vestibule from scratch in Blender.',
      'Chroma keyed live-action actors and composited them seamlessly into multi-pass 3D renders.',
      'Tracked mobile UI interfaces and planted digital ATM units into live-action university footage.',
      'Designed audio-synced lyric collage sequence and final brand outro animation.'
    ]
  },
  {
    id: 'uswatte-tvc',
    tc: '#02',
    title: 'Uswatte Chirpy Chips: "රිදෙන්න දැනෙන රස" TV Commercial',
    spec: '3D Product Packaging, Dynamic Slicing & Pack Shot Compositing',
    client: 'Uswatte Confectionery Works (pvt) Ltd',
    agency: 'Zuse Colombo & Sky Films',
    role: 'VFX Artist',
    tools: ['Blender', 'After Effects'],
    format: 'TVC 30s',
    category: 'tvc',
    driveFileId: '17pXoo4SBaSh6_iEZUbz19AxBJbkPzdN3',
    driveUrl: getDriveFileViewUrl('17pXoo4SBaSh6_iEZUbz19AxBJbkPzdN3'),
    overview:
      'Broadcast commercial requiring seamless transition from clinic live-action footage into a fully animated, hyper-realistic 3D flavor packshot sequence.',
    highlights: [
      'Modeled Hot N Spicy and Cheese & Onion packaging from scratch in Blender with physically accurate materials.',
      'Simulated high-speed potato slicing and spice seasoning particles in Blender.',
      'Composited physics-driven bag catching falling chips in After Effects.',
      'Engineered signature closing 3-flavor packshot with floating chip particles.'
    ]
  },
  {
    id: 'uswatte-doc',
    tc: '#03',
    title: 'Uswatte Chirpy Chips: Brand Documentary',
    spec: '3D Potato Meteor Atmospheric Entry & Micro Spice Particle Sims',
    client: 'Uswatte Confectionery Works (pvt) Ltd',
    agency: 'Sky Films International',
    role: 'VFX Artist',
    tools: ['Blender', 'After Effects'],
    format: 'Brand Doc',
    category: 'tvc',
    videoUrl: '/videos/Uswatte Chirpy Chips Documentary.mp4',
    previewStart: 2.0,
    previewDuration: 7.0,
    driveFileId: '1aDB_tIf7wj8AamW7fKZ3V4_UdS_uVsaQ',
    driveUrl: getDriveFileViewUrl('1aDB_tIf7wj8AamW7fKZ3V4_UdS_uVsaQ'),
    overview:
      'Cinematic brand documentary featuring a photorealistic 3D space-to-atmosphere meteor opening sequence that bookends the factory manufacturing documentary.',
    highlights: [
      'Engineered 3D space atmosphere and potato meteor entry with volumetric fire and smoke simulations in Blender.',
      'Rigged and simulated natural tumbling potato physics bouncing from burlap sack onto wood.',
      'Designed slow-motion culinary spice particles (chili flakes, salt, pepper) flying against dark backdrop.'
    ]
  },
  {
    id: 'singer-simple-pay',
    tc: '#04',
    title: 'SINGER Simple Pay: TV Commercial',
    spec: 'Fluid Particle Simulations, Living Room 3D Furniture Materialization',
    client: 'SINGER',
    agency: 'Magic Mango (Pvt) Ltd.',
    role: 'VFX Artist',
    tools: ['After Effects', 'Premiere Pro'],
    format: 'TVC 45s',
    category: 'tvc',
    videoUrl: '/videos/Singer Simple Pay TVC.mp4',
    previewStart: 3.0,
    previewDuration: 7.0,
    driveFileId: '1IDgxRvpZGFxFBTJ5GEHTzB7lLl9nzpXX',
    driveUrl: getDriveFileViewUrl('1IDgxRvpZGFxFBTJ5GEHTzB7lLl9nzpXX'),
    overview:
      'Narrative commercial transforming an empty house into a fully furnished modern home using vibrant particle simulations that materialize furniture around the actors.',
    highlights: [
      'Generated multi-colored fluid particle vortexes that organically grow TV, sofa, and coffee table assets.',
      'Executed 3D camera tracking across dynamic walking actor movements.',
      'Animated localized starburst identity and kinetic typography for simple payment messaging.'
    ]
  },
  {
    id: 'singer-washing-machine',
    tc: '#05',
    title: 'SINGER Washing Machines: "හිසේ තියෙන බර සෝදා හරින්න…" TV Commercial',
    spec: 'Window Tracking, Color Optimization & Commercial Outro Pipeline',
    client: 'SINGER',
    agency: 'Ogilvy Digital',
    role: 'VFX Assistant',
    tools: ['After Effects', 'DaVinci Resolve'],
    format: 'TVC 30s',
    category: 'tvc',
    driveFileId: '1j7q4e30FMYA2VOBpCmrO1YNx-9136pGP',
    driveUrl: getDriveFileViewUrl('1j7q4e30FMYA2VOBpCmrO1YNx-9136pGP'),
    overview:
      'Humorous broadcast commercial requiring clean window tracking shots, product color optimization, and broadcast outro assembly.',
    highlights: [
      'Executed window tracking replacements as characters look through the exterior frames.',
      'Assisted in DaVinci Resolve color optimization for appliance white chassis pop and vibrant fabrics.',
      'Assembled final product lineup outro with animated promotional badges and financing details.'
    ]
  },
  {
    id: 'pickme-flash',
    tc: '#06',
    title: 'PickMe Flash: TV Commercial (Spots 1 & 2)',
    spec: 'Digital Vehicle Branding 3D Track, UI Explainer & End Card',
    client: 'PickMe',
    agency: 'Litmus & Sky Films International',
    role: 'VFX & Motion Graphics Artist',
    tools: ['Blender', 'After Effects'],
    format: 'Broadcast',
    category: 'tvc',
    driveFileId: '1MJR7U_ISncNRAjiC0mrde5JHoVRI_JOX',
    driveClips: [
      { label: 'Spot 01 (Auto Parts)', fileId: '1MJR7U_ISncNRAjiC0mrde5JHoVRI_JOX' },
      { label: 'Spot 02 (Fashion Retail)', fileId: '1DT3lO2Fp-f5iojWHXlNP4dFlnQtjtkVV' }
    ],
    driveUrl: getDriveFileViewUrl('1MJR7U_ISncNRAjiC0mrde5JHoVRI_JOX'),
    overview:
      'Testimonial commercial demonstrating instant business logistics with live-action vehicle tracking and custom UI explainer graphics.',
    highlights: [
      '3D match-moved moving scooters and three-wheelers in Blender and After Effects to composite digital branding.',
      'Designed animated Send and Receive mobile app overlays guiding viewers through the booking pipeline.',
      'Created Goods Insurance golden badge, price tag, and live tracking map callouts.',
      'Composited kinetic promotional end-card with fast-paced call-to-action typography.'
    ]
  },
  {
    id: 'little-lion-tvc',
    tc: '#07',
    title: 'Little Lion: TV Commercial',
    spec: '3D Packaging Modernization, Match-Moving & Product Window',
    client: 'Little Lion',
    agency: 'Holmes Pollard & Stott & Sky Films',
    role: 'VFX Artist',
    tools: ['Blender', 'After Effects'],
    format: 'TVC 30s',
    category: 'tvc',
    videoUrl: '/videos/Little Lion TVC.mp4',
    previewStart: 2.0,
    previewDuration: 7.0,
    driveFileId: '1TSMw51NvCoAVgnO3LvdfJFGCy6TAXdfL',
    driveUrl: getDriveFileViewUrl('1TSMw51NvCoAVgnO3LvdfJFGCy6TAXdfL'),
    overview:
      'Broadcast visual modernization replacing outdated product packages in live-action footage with fresh 3D packaging without requiring reshoots.',
    highlights: [
      'Modeled brand-new packaging suite from scratch in Blender with accurate cardboard texturing.',
      '3D tracked actor hand interactions to seamlessly match Madeira Cake and Batter Carol packages.',
      'Designed and composited final 3D/2D product window showcase over clean studio backdrop.'
    ]
  },
  {
    id: 'keells-smart-family',
    tc: '#08',
    title: 'Keells Smart Family Promo (Season 7): TV Commercial',
    spec: 'VFX Compositing, Shelf Logo Pop-Ups & Promotional End Card',
    client: 'Unilever Sri Lanka & Keells Super',
    agency: 'Litmus & Sky Films International',
    role: 'VFX Artist',
    tools: ['After Effects'],
    format: 'TVC 45s',
    category: 'tvc',
    driveFileId: '1JTfq1TLzpoUsOlUe-sF0TTaA_yTx-7Iq',
    driveUrl: getDriveFileViewUrl('1JTfq1TLzpoUsOlUe-sF0TTaA_yTx-7Iq'),
    overview:
      'Vibrant seasonal supermarket commercial blending retail live-action footage with dynamic pop-up graphics and kinetic promotional typography.',
    highlights: [
      'Tracked and animated floating retail brand logos (Lifebuoy, Comfort, Sunsilk, Knorr) over supermarket aisles.',
      'Executed energetic split-screen transitions and clean mask cutouts.',
      'Composited high-impact kinetic typography overlays and Unilever partner brand grid outro.'
    ]
  },

  // ================= 9:16 COMMERCIALS & DIRECTION (6) =================
  {
    id: 'isso-pittu-crab',
    tc: '#09',
    title: 'ISSO Colombo City Centre: Pittu & Jaffna Crab Curry',
    spec: 'Tabletop Cinematography, DaVinci Grade, Roto Title & AI End-Card',
    client: 'ISSO (Colombo City Centre)',
    agency: 'Direct Commercial Production',
    role: 'DOP, Editor, Colorist & AI Video Artist',
    tools: ['Premiere Pro', 'DaVinci Resolve', 'After Effects', 'Higgsfield'],
    format: '9:16 Reel',
    category: '9-16',
    videoUrl: '/videos/Pittu Reel v8.mp4',
    previewStart: 1.5,
    previewDuration: 6.0,
    driveFileId: '1y_3RyeK8dPA7SHSFjonRU7GfiTjfQlvW',
    driveUrl: getDriveFileViewUrl('1y_3RyeK8dPA7SHSFjonRU7GfiTjfQlvW'),
    overview:
      'Solo end-to-end commercial production: on-location tabletop cinematography, appetizing DaVinci Resolve color grading, depth-rotoscoped typography, and AI-assisted end-card.',
    highlights: [
      'Shot macro tabletop cinematography capturing rich textures of steaming white pittu and crab curry.',
      'Created video-in-logo prawn track matte opener.',
      'Rotoscoped foreground crab claw in After Effects to nest kinetic title behind the food in 3D depth.',
      'Graded in DaVinci Resolve to enhance rich amber curry oils and warm highlights.',
      'Generated AI end-card outro establishing dynamic brand identity.'
    ]
  },
  {
    id: 'isso-wok-burger',
    tc: '#10',
    title: 'ISSO Colombo City Centre: Wok Fire & Split-Screen Burger',
    spec: 'Slow-Mo Wok Flame Cinematography, Dual Split-Screen & AI Outro',
    client: 'ISSO (Colombo City Centre)',
    agency: 'Direct Commercial Production',
    role: 'Tabletop DOP, Editor & Colorist',
    tools: ['Premiere Pro', 'DaVinci Resolve', 'After Effects', 'Beeble'],
    format: '9:16 Reel (4K REC)',
    category: '9-16',
    videoUrl: '/videos/ISSO BOGO 1.mp4',
    previewStart: 1.5,
    previewDuration: 6.0,
    driveFileId: '18IvBcil57dqRKZSCSeKyHDHGJGOBS_j-',
    driveUrl: getDriveFileViewUrl('18IvBcil57dqRKZSCSeKyHDHGJGOBS_j-'),
    overview:
      'Hero culinary commercial capturing roaring wok flames, synchronized dual split-screen burger assembly, and rich cinematic color grading.',
    highlights: [
      'Captured high-speed wok flame burst engulfing jumbo black tiger prawns on location at Colombo City Centre.',
      'Engineered rhythmic dual split-screen editing showing synchronized kitchen preparation and burger assembly.',
      'Polished in DaVinci Resolve for intense contrast, deep shadows, and mouth-watering saturation.',
      'Integrated smooth orbital camera movements and AI-enhanced outro.'
    ]
  },
  {
    id: 'isso-prawn-kottu',
    tc: '#11',
    title: 'ISSO Colombo City Centre: Prawn Kottu (2095/= Launch)',
    spec: 'High-Speed Wok Toss, 3D Z-Space Typography & AI End-Card',
    client: 'ISSO (Colombo City Centre)',
    agency: 'Direct Commercial Production',
    role: 'DOP, Editor, Colorist & VFX Artist',
    tools: ['Premiere Pro', 'DaVinci Resolve', 'After Effects', 'Higgsfield'],
    format: '9:16 Reel',
    category: '9-16',
    videoUrl: '/videos/Pittu Kottu Reel v4.mp4',
    previewStart: 1.5,
    previewDuration: 6.0,
    driveFileId: '1CIlLtHtygCsqpwuUqo-RCK_0hV0v4NT4',
    driveUrl: getDriveFileViewUrl('1CIlLtHtygCsqpwuUqo-RCK_0hV0v4NT4'),
    overview:
      'High-speed culinary spot capturing airborne kottu and prawns with searing wok embers, 3D Z-space motion tracked price typography, and AI-assisted outro.',
    highlights: [
      'High frame-rate capture of airborne wok toss with embers and dynamic steam sizzle.',
      'Foreground rotoscoping with 3D Z-space tracked "PRAWN KOTTU 2095/=" kinetic typography.',
      'Graded in DaVinci Resolve with warm tungsten glow contrasting against dark restaurant ambiance.',
      'Synthesized AI commercial end-card promoting CCC location launch.'
    ]
  },
  {
    id: 'sky-films-casting',
    tc: '#12',
    title: 'Sky Films 2.0: Casting Call Commercial',
    spec: 'Studio Spotlight Cinematography, Glitch Edit & Kinetic VFX',
    client: 'Sky Films International',
    agency: 'Sky Films 2.0 Initiative',
    role: 'Director, DOP, Editor & VFX Artist',
    tools: ['Premiere Pro', 'After Effects', 'Photoshop'],
    format: 'Broadcast & 9:16 Master',
    category: '9-16',
    driveFileId: '11LY32sfOz5kdEnOdlwbl97wtCWbxhU4D',
    driveUrl: getDriveFileViewUrl('11LY32sfOz5kdEnOdlwbl97wtCWbxhU4D'),
    overview:
      'Led the full visual vision across set lighting, cinematography, rapid rhythmic editing, and kinetic typography to recruit talent for Sky Films 2.0.',
    highlights: [
      'Directed studio lighting setups using high-contrast edge spotlights against pitch-black backgrounds.',
      'Framed talent across three archetypes: Fashion, Presence, and Personality.',
      'Edited fast-paced montage with aggressive digital glitches, RGB color splits, and data-mosh accents.',
      'Composited kinetic typography tracking talent motion to amplify energy.'
    ]
  },
  {
    id: 'rich-look-holiday',
    tc: '#13',
    title: "Rich Look: 'A Holiday Filled With Smiles' Campaign",
    spec: 'Tracked Window Typography, Motion Wipe Transition & Product Window',
    client: 'Rich Look',
    agency: 'Sky Films International',
    role: 'VFX Artist',
    tools: ['After Effects', 'Premiere Pro'],
    format: '9:16 Social',
    category: '9-16',
    driveFileId: '1rjiIoJlN7cKumHo-8OQXYZnpt8OgYfVB',
    driveUrl: getDriveFileViewUrl('1rjiIoJlN7cKumHo-8OQXYZnpt8OgYfVB'),
    overview:
      'Festive retail promotional campaign combining window frame tracking, stylized curved wipe transitions, and multi-branch retail product windows.',
    highlights: [
      'Tracked and composited stylized holiday typography directly onto window frames as camera pushes in.',
      'Designed animated curved red wipe transition bridging live-action to branded background.',
      'Composited seasonal product window featuring 5 store locations with clean kinetic typography.'
    ]
  },
  {
    id: 'eva-mens-day',
    tc: '#14',
    title: "Eva: Men's Day / Father's Day Documentary",
    spec: 'Subtitle Localization Pipeline, Motion Collage & Particle Outro',
    client: 'Eva Sri Lanka',
    agency: 'Sky Films International',
    role: 'VFX Artist & Editor',
    tools: ['Premiere Pro', 'After Effects'],
    format: 'Prime Doc',
    category: '9-16',
    driveFileId: '1MePo5pchNdOhtDhVCOWzy8j2YEu-tP8W',
    driveUrl: getDriveFileViewUrl('1MePo5pchNdOhtDhVCOWzy8j2YEu-tP8W'),
    overview:
      'Touching interview documentary requiring precise bilingual subtitling, emotional portrait motion collage, and glowing particle outro animation.',
    highlights: [
      'Executed synchronized bilingual English and Tamil subtitle pipeline in Premiere Pro.',
      'Animated multi-panel grid collage in After Effects timing portraits with emotional climax.',
      'Engineered Eva brand outro with glowing particle light sweeps and clean typography.'
    ]
  },

  // ================= REAL ESTATE & 3D END-CARDS (5) =================
  {
    id: 'prime-marina',
    tc: '#15',
    title: 'Prime Marina Phase 1 & 2',
    spec: 'Main Walkthrough, End Cards, Architectural Motion Graphics & VFX Clean-Up',
    client: 'Prime Lands',
    agency: 'Direct Commercial Production',
    role: 'VFX & Composite Artist',
    tools: ['After Effects', 'Photoshop'],
    format: '4K 16:9',
    category: 'realestate',
    driveFileId: '1luRcSRQtuMJztRDJNI93LTh4A8_YQNFf',
    driveClips: [
      { label: 'Main Walkthrough', fileId: '1luRcSRQtuMJztRDJNI93LTh4A8_YQNFf' },
      { label: 'Phase 1 End Card', fileId: '1dtEi9YJvjWZZYf0IfFRuBV-_RpI3h5eR' },
      { label: 'Phase 2 End Card', fileId: '1xQr2Vv7CHWoC_2fjZ0NM8vJsGDOr3Lyt' },
      { label: 'Phase 2 Teaser End Card', fileId: '1Z7fbq2M69ZjdJqeQMzeuv6enqVzeiWH9' }
    ],
    driveUrl: getDriveFileViewUrl('1luRcSRQtuMJztRDJNI93LTh4A8_YQNFf'),
    overview:
      'Luxury coastal real estate campaign featuring the main architectural walkthrough, 4K metallic end cards, dynamic lower thirds, and aerial footage clean-up for Prime Marina.',
    highlights: [
      'Created metallic luxury end cards with subtle lighting sweeps across Phase 1 and Phase 2.',
      'Designed technical architectural lower thirds displaying square footage and amenities.',
      'Executed clean-up compositing on drone aerial plates and walkthrough sequences.'
    ]
  },
  {
    id: 'central-park-blvd',
    tc: '#16',
    title: 'Central Park Boulevard',
    spec: '3D Architectural Wireframe Reveal & Dynamic End Card',
    client: 'Prime Lands / Port City Colombo',
    agency: 'Direct Commercial Production',
    role: '3D Artist & Compositor',
    tools: ['Blender', 'After Effects'],
    format: 'Broadcast Master',
    category: 'realestate',
    driveFileId: '1mJFgDPbl2ZYBQrd4lU3ukJHxLh-TOc3o',
    driveUrl: getDriveFileViewUrl('1mJFgDPbl2ZYBQrd4lU3ukJHxLh-TOc3o'),
    overview:
      '3D architectural wireframe overlay fading into photorealistic renders for a premier Port City luxury residential project.',
    highlights: [
      'Modeled 3D wireframe mesh overlays for coastal skyscraper towers in Blender.',
      'Camera-tracked aerial plates and aligned 3D models with on-location geography.',
      'Composited glowing cyan architectural blueprint lines into dusk lighting.'
    ]
  },
  {
    id: 'location-advantage',
    tc: '#17',
    title: 'Location Advantage V1 & V3',
    spec: 'Background Sky/Environment Replacement, Lower Thirds & Mograph',
    client: 'Prime Lands',
    agency: 'Direct Commercial Production',
    role: 'VFX & Composite Artist',
    tools: ['After Effects'],
    format: 'Digital Master',
    category: 'realestate',
    driveFileId: '1yuJjANMhHG5D0tr_XsHgWl2NLG7WqHUI',
    driveClips: [
      { label: 'Location Advantage V3', fileId: '1yuJjANMhHG5D0tr_XsHgWl2NLG7WqHUI' },
      { label: 'Location Advantage V1', fileId: '1WWgYICSuRkGAUqxsG3w7LDKFefr478Yq' }
    ],
    driveUrl: getDriveFileViewUrl('1yuJjANMhHG5D0tr_XsHgWl2NLG7WqHUI'),
    overview:
      'Real estate explainer series enhancing property surroundings through clean environment replacement and animated locator graphics.',
    highlights: [
      'Replaced overcast skies with golden hour sunset gradients across multiple property tours.',
      'Integrated floating motion tracking pins connecting major highways and landmarks.',
      'Formatted delivery for both widescreen digital presentation and social cuts.'
    ]
  },
  {
    id: 'rbs-cement-panel',
    tc: '#18',
    title: 'RBS Cement Panel: "බඳින්නැද්ද බන්...?" TV Commercial',
    spec: '3D Modular House Assembly, Architectural Simulation & Explainer',
    client: 'Rhino Roofing Products Limited',
    agency: 'Rhino Roofing',
    role: '3D & VFX Artist',
    tools: ['Blender', 'After Effects'],
    format: 'B2B TVC',
    category: 'realestate',
    driveFileId: '1CGRltLH64MI8bQzThFd7lQMg8BO65Mjt',
    driveUrl: getDriveFileViewUrl('1CGRltLH64MI8bQzThFd7lQMg8BO65Mjt'),
    overview:
      'Humorous national commercial bridging comedic live-action dialogue with a technical 3D modular house assembly demonstration.',
    highlights: [
      'Modeled 3D architectural house structure and prefabricated RBS Cement Panels in Blender.',
      'Animated modular snap-together assembly sequence highlighting rapid construction.',
      'Designed animated motion graphic comparison highlighting strength, zero plastering, and cost savings.',
      'Integrated Rhino 60 Years brand mark into informational outro end-card.'
    ]
  },
  {
    id: 'homelands-skyline',
    tc: '#19',
    title: 'Celebrity & Brand VFX Composites (Mahela, Jackie & Bathiya)',
    spec: 'AI Environment Relighting, Balcony Set Extensions & SwitchX Compositing',
    client: 'Commercial Campaigns',
    agency: 'Direct Commercial Production',
    role: 'VFX & AI Composite Artist',
    tools: ['After Effects', 'Beeble', 'Higgsfield'],
    format: 'Broadcast 16:9',
    category: 'realestate',
    driveFileId: '1AJBwhfvz5VL5DF1XIHQtrzdGCyyGYSDe',
    driveClips: [
      { label: 'Mahela Shot 01 (SwitchX)', fileId: '1AJBwhfvz5VL5DF1XIHQtrzdGCyyGYSDe' },
      { label: 'Mahela Shot 02 (SwitchX)', fileId: '13Tk9CpROjZtUDLT6iq10K5rJmzrdT9hn' },
      { label: 'Jackie Balcony Outro 1', fileId: '1oqQ23KcExC50TdXuiMgSyL--y2Pf2sAy' },
      { label: 'Bathiya Shot 01 (SwitchX)', fileId: '12YnYX4-POdJSLuqJxvvofmwLGoAMHdZx' },
      { label: 'Candyman Shot 01 (SwitchX)', fileId: '1ZMlNLRM4yrax7lZwrOCKiAaqHdg5F32C' }
    ],
    driveUrl: 'https://drive.google.com/drive/folders/1ptaj943jLlpt3Hqn4EQD14PTrvft5m2S?usp=drive_link',
    overview:
      'Multi-shot AI relighting, environment replacement, and green-screen/balcony compositing pipeline across celebrity commercial spots featuring Mahela Jayawardene, Jacqueline Fernandez, and Bathiya.',
    highlights: [
      'Executed SwitchX AI relighting and background extraction across multi-camera celebrity plates.',
      'Composited balcony extensions and matching ambient light wraps in After Effects.',
      'Delivered clean multi-take composites for broadcast editorial assembly.'
    ]
  },

  // ================= LOGO IDENTS (3) =================
  {
    id: 'rush-city-ident',
    tc: '#20',
    title: 'Rush City Logo Animation',
    spec: 'Video-in-Text Track Matte Logo Ident & Kinetic Flare',
    client: 'Rush City',
    agency: 'Rush City Direct',
    role: 'Motion Graphics & VFX Artist',
    tools: ['After Effects'],
    format: 'Brand Ident',
    category: 'ident',
    driveFileId: '1ae2DpTlBnHksbzfqVot44Q6tuBnrI-7F',
    driveUrl: getDriveFileViewUrl('1ae2DpTlBnHksbzfqVot44Q6tuBnrI-7F'),
    overview:
      'Punchy broadcast brand ident utilizing high-energy video playback masked inside stylized typography with optical anamorphic streak flares.',
    highlights: [
      'Designed video-in-text track matte revealing high-octane city lifestyle footage.',
      'Integrated custom anamorphic cyan and amber light streaks.',
      'Mastered for cinema pre-roll and social video intros.'
    ]
  },
  {
    id: 'samsara-residencies',
    tc: '#21',
    title: 'Samsara Residencies Logo Animation',
    spec: '2D Character Run-Cycle & Architectural Brand Reveal',
    client: 'Samsara Residencies',
    agency: 'Samsara Direct',
    role: 'Motion Graphics Artist',
    tools: ['After Effects', 'Photoshop'],
    format: 'Brand Ident',
    category: 'ident',
    driveFileId: '1OAzFeQkPzzkEyiNT1eKfT__qOf1a7FhX',
    driveUrl: getDriveFileViewUrl('1OAzFeQkPzzkEyiNT1eKfT__qOf1a7FhX'),
    overview:
      'Artistic brand ident animating a stylized 2D character run-cycle that dissolves into luxury architectural identity marks.',
    highlights: [
      'Rigged and animated smooth 2D character silhouette run-cycle.',
      'Designed fluid particle transition reforming into the Samsara emblem.',
      'Synchronized with custom acoustic audio sting.'
    ]
  },
  {
    id: 'sliit-convocation-guidelines',
    tc: '#22',
    title: 'SLIIT Convocation Guidelines — Motion Graphics Explainer',
    spec: 'Broadcast Motion Graphics, Kinetic Typography & Instructional Visuals',
    client: 'SLIIT (Sri Lanka Institute of Information Technology)',
    agency: 'SLIIT Direct',
    role: 'Motion Graphics Artist & Video Editor',
    tools: ['After Effects', 'Premiere Pro'],
    format: '16:9 Master',
    category: 'ident',
    driveFileId: '13DSmzw7mQ920UdwljX6YSuSBmLOUjwjb',
    driveUrl: getDriveFileViewUrl('13DSmzw7mQ920UdwljX6YSuSBmLOUjwjb'),
    overview:
      'Official convocation guidelines motion graphics video produced for SLIIT, presenting ceremonial procedures and graduate instructions with clean kinetic typography.',
    highlights: [
      'Designed structured instructional motion graphics and lower thirds in After Effects.',
      'Synchronized visual cues and transitions with voiceover/music pacing in Premiere Pro.',
      'Delivered final full-HD master for university convocation broadcast.'
    ]
  }
];
