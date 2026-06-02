export type ProjectCategory = 'TVC' | 'Promo' | 'Documentary';

export interface Project {
  slug: string;
  title: string;
  client: string;
  agency?: string;
  productionHouse: string;
  role: string;
  category: ProjectCategory;
  overview: string;
  execution: string[];
  videos: string[]; // Local path or Vercel Blob URL
}

export const projects: Project[] = [
  {
    slug: 'pickme-flash-promo',
    title: 'PickMe Flash: TV Commercial',
    client: 'PickMe',
    agency: 'Litmus & SKY Films International',
    productionHouse: 'SKY Films International',
    role: 'VFX & Motion Graphics Artist',
    category: 'Promo',
    overview: 'A highly engaging, testimonial-driven national television commercial demonstrating how PickMe Flash streamlines local business logistics. The narrative utilizes a hybrid approach, seamlessly intertwining real-world business owner testimonials—from sectors like automotive parts and fashion retail—with custom motion graphics to highlight the efficiency of the instant delivery service.',
    execution: [
      'Digital Vehicle Branding: Leveraged Blender and Adobe After Effects to execute precise 3D tracking on live-action, moving delivery vehicles. Successfully composited clean, digital PickMe Flash branding onto the scooters and three-wheelers featured throughout the commercial.',
      'UI & Service Visualization: Designed and animated stylized 2D graphic overlays to break down the service pipeline. This included custom "Send" and "Receive" mobile app interface graphics that visually guided the viewer through the booking process.',
      'Dynamic Feature Integration: Created a series of smooth, dynamic icon animations that popped on-screen during client interviews to emphasize core selling points. These visual elements included a "Goods Insurance" golden badge, an "Affordable" pricing indicator, and a "Live Tracking" interactive map overlay.',
      'Kinetic Promotional End-Card: Engineered and fully animated the final brand outro sequence. Utilized bold kinetic typography featuring key phrases like "Instant Delivery", "Affordable", and "Send and Receive", layered over a stylized, fast-moving corporate backdrop to deliver an impactful closing call-to-action.'
    ],
    videos: [
      '/videos/PickMe Flash Promo Video 1.mp4',
      '/videos/PickMe Flash Promo Video 2.mp4'
    ]
  },
  {
    slug: 'little-lion-tvc',
    title: 'Little Lion: TV Commercial',
    client: 'Little Lion',
    agency: 'Holmes Pollard & Stott',
    productionHouse: 'SKY Films International',
    role: 'VFX Artist',
    category: 'TVC',
    overview: 'A comprehensive and highly technical digital product update for a broadcast commercial. Working alongside SKY Films International and Holmes Pollard & Stott, the core objective was to modernize the visual narrative without the need for reshoots by seamlessly integrating newly designed 3D product packaging directly into the existing live-action footage.',
    execution: [
      '3D Modeling & Asset Creation: Led the visual modernization pipeline by modeling the brand\'s new packaging entirely from scratch using Blender.',
      'Advanced Product Replacement: Utilized precise match-moving and 3D tracking in Adobe After Effects to flawlessly replace the outdated on-set items with the new 3D packaging.',
      'Live-Action Integration: Executed complex compositing to ensure the digital assets aligned perfectly with the actors\' natural hand movements and the scene\'s dynamic lighting, specifically during critical narrative interactions with the Madeira Cake box, Batter Carol cookies, and Soft Log.',
      'Final Product Window: Designed, animated, and composited the closing 3D/2D product window, showcasing the fully updated Little Lion range (including the Sponge Cake) over a studio background to deliver a polished, broadcast-ready conclusion.'
    ],
    videos: [
      '/videos/Little Lion TVC.mp4'
    ]
  },
  {
    slug: 'keels-smart-family-promo',
    title: 'Keels Smart Family Promo (Season 7): TV Commercial',
    client: 'Unilever Sri Lanka & Keels',
    agency: 'Litmus',
    productionHouse: 'SKY Films International',
    role: 'VFX Artist',
    category: 'Promo',
    overview: 'A high-energy, fast-paced national television commercial produced for Unilever Sri Lanka and Keels supermarkets to promote their seasonal "Smart Family" campaign. The project blends vibrant live-action retail footage with dynamic, colorful post-production elements to powerfully highlight promotional rewards and participating brands.',
    execution: [
      'Motion Graphics & Brand Integration: Executed the dynamic pop-up graphics pipeline by seamlessly animating floating retail brand logos—such as Comfort, Lifebuoy, Sunsilk, and Knorr—directly over the live-action supermarket shelves as characters interacted with the products.',
      'VFX Compositing & Sequencing: Collaborated heavily on the visual effects pipeline to integrate split-screen visual layouts, complex masking, and fluid transitions that maintained the energetic pacing of the retail environment.',
      'Kinetic Typography & Overlays: Implemented clean, high-impact promotional text overlays throughout the video, ensuring readability and broadcast-ready alignment. This included integrating major tracking Call-To-Actions like "Win Rs. 18 Million" and "Grand Reward of Rs. 2.5 Million".',
      'Promotional End-Card Compositing: Assisted in compositing the comprehensive final brand end-card. Successfully balanced complex promotional terms, official campaign graphics, and a large grid of individual Unilever brand assets into a neat, cohesive visual conclusion.'
    ],
    videos: [
      '/videos/Keels Smart Family Promo.mp4'
    ]
  },
  {
    slug: 'peoples-remittance-tvc',
    title: 'People\'s Bank: "People\'s Remittance" TV Commercial',
    client: 'People\'s Bank',
    agency: '',
    productionHouse: 'SKY Films International',
    role: 'VFX Compositor, 3D Artist, & Motion Graphics Artist',
    category: 'TVC',
    overview: 'A comprehensive post-production effort requiring a seamless blend of complex 3D environments, precision visual effects, and dynamic motion graphics for a major television commercial.',
    execution: [
      '3D Environment Design: Built a complete, modern 3D office space overlooking a city skyline and a branded "Self Banking" ATM booth entirely from scratch using Blender.',
      'Green Screen Integration: Utilized chroma keying techniques to flawlessly integrate a live-action actor sitting at a desk directly into the fully 3D-modeled office environment.',
      'Tracking & Screen Replacements: Executed precise screen replacements to track and integrate the People\'s Bank smartphone application interface into live-action footage. Additionally, utilized 3D tracking to seamlessly plant the 3D ATM asset into a live-action university setting.',
      'Pipeline Management: Successfully managed all necessary camera animations and executed multi-pass rendering to feed into a smooth, broadcast-ready compositing pipeline.',
      'Motion Graphics & Outro: Designed and animated an audio-synced, lyric-based collage sequence featuring sliding portrait frames over a vibrant red background. Concluded the commercial by engineering the final brand outro animation, revealing the People\'s Remittance and People\'s Bank logos for a polished finish.'
    ],
    videos: [
      '/videos/Peoples Remittance TV Commercial.mp4'
    ]
  },
  {
    slug: 'rbs-cement-panel-tvc',
    title: 'RBS Cement Panel: "බඳින්නැද්ද බන්...?" TV Commercial',
    client: 'Rhino Roofing Products Limited',
    agency: '',
    productionHouse: '',
    role: 'VFX Artist',
    category: 'TVC',
    overview: 'A humor-driven television commercial centered around a clever linguistic pun that required seamless visual effects and 3D architectural animation to bridge a lighthearted narrative with a technical product demonstration.',
    execution: [
      '3D Architectural Animation: Transitioned the live-action storytelling dynamically into a clean, detailed 3D architectural product rendering.',
      'Technical Demonstration: Visually demonstrated the rapid, modular assembly of a house by animating how the pre-fabricated RBS Cement Panels snap together smoothly over a building foundation.',
      'VFX Integration: Co-executed the visual effects to ensure a seamless bridge between the comedic live-action narrative and the technical 3D product demonstration.',
      'Motion Graphics: Animated a breakdown of core product advantages, detailing key selling points such as time and cost savings, higher strength, lower weight, and the total elimination of plastering.',
      'Brand End-Card: Cleanly integrated the commercial hotline, localized entry pricing, and the Rhino 60 Years brand mark into the final informational end-card.'
    ],
    videos: [
      '/videos/RBS TVC.mp4'
    ]
  },
  {
    slug: 'rich-look-holiday-campaign',
    title: 'Rich Look: \'A Holiday Filled With Smiles\' Campaign',
    client: 'Rich Look',
    agency: '',
    productionHouse: 'SKY Films International',
    role: 'VFX Artist',
    category: 'Promo',
    overview: 'A festive holiday television commercial requiring final visual polish and cohesive brand messaging. The project focused heavily on high-end motion graphics and compositing to ensure a smooth, celebratory transition from the live-action narrative to the brand\'s final call-to-action.',
    execution: [
      'Title Compositing & Integration: Handled the compositing of the stylized "A Holiday Filled With Smiles" typography directly over the live-action footage. Successfully tracked and layered the graphic so it integrated naturally over a window frame as the camera pushed in.',
      'Dynamic Brand Transitions: Designed and animated a fluid, red curved shape that wiped across the screen. This motion graphic element acted as a dynamic transition, seamlessly wiping away the live-action environment to reveal the final branded background.',
      'Promotional End-Card: Executed the complete motion graphics product window for the brand\'s seasonal holiday promotion.',
      'Animation & Finishing: Utilized Adobe After Effects to animate the final appearance of the Rich Look logo alongside sliding typography detailing multiple store locations (Maharagama, Negombo, Kalutara, Ratnapura, Kottawa). Composited the final sequence to deliver a clean, broadcast-ready conclusion.'
    ],
    videos: [
      '/videos/Rich Look - A Holiday Filled with Smiles Directors Cut.mp4'
    ]
  },
  {
    slug: 'singer-simple-pay-tvc',
    title: 'SINGER Simple Pay: TV Commercial',
    client: 'SINGER',
    agency: 'Magic Mango (Pvt) Ltd.',
    productionHouse: '',
    role: 'VFX Artist',
    category: 'TVC',
    overview: 'A warm, narrative-driven commercial highlighting the accessibility of SINGER\'s "Simple Pay" installment scheme. By leveraging dynamic visual effects, the narrative transforms a young couple\'s empty, stressful new house into a fully furnished living space, magically manifesting their retail desires into reality.',
    execution: [
      'Particle Simulations & VFX Reveals: Designed and executed vibrant, multi-colored fluid particle simulations that organically "grew" and materialized 3D furniture—including a flat-screen TV, a wooden coffee table, and a plush blue sofa—directly into the live-action room.',
      'Advanced Compositing & Tracking: Tracked complex camera movements as the actors walked through the space. Seamlessly composited magical dust layers around and behind the actors, ensuring realistic depth, lighting, and environmental interaction.',
      'Motion Graphics & Typography: Brought the localized geometric starburst logo to life through animation. Designed clean transition cuts and synced kinetic typography for the campaign\'s core tagline ("ගැනීමත් simple ගෙවීමත් simple") to anchor the messaging.'
    ],
    videos: [
      '/videos/Singer Simple Pay TVC.mp4'
    ]
  },
  {
    slug: 'singer-washing-machine-tvc',
    title: 'SINGER Washing Machines: "හිසේ තියෙන බර සෝදා හරින්න…" TV Commercial',
    client: 'SINGER',
    agency: 'Ogilvy Digital',
    productionHouse: '',
    role: 'VFX Assistant',
    category: 'TVC',
    overview: 'A conceptually driven, humorous television commercial centered around the theme of washing away the burden on your head. The narrative leverages a literal physical manifestation of a laundry burden—a massive, comical pile of clothes balanced precariously on a woman\'s head—to contrast the stress of manual household chores with the absolute relief and joy of owning a modern SINGER washing machine.',
    execution: [
      'VFX & Compositing Support: Provided assistant visual effects support to ensure clean environmental compositing throughout the commercial\'s contrasting settings.',
      'Tracking & Integration: Assisted in the execution of seamless tracking shots, specifically for scenes where characters look through windows.',
      'Visual Optimization: Contributed to clean color optimization workflows to ensure the diverse fabrics and the sleek white chassis of the SINGER appliances popped on-screen.',
      'Post-Production Delivery: Supported the final pipeline, which included an animated commercial outro showcasing SINGER’s diverse lineup of washing machines, promotional badges, and localized financial details.'
    ],
    videos: [
      '/videos/Singer Washing Machine TVC.mp4'
    ]
  },
  {
    slug: 'sky-films-casting-call',
    title: 'Sky Films 2.0: Casting Call',
    client: 'Sky Films 2.0',
    agency: '',
    productionHouse: 'Sky Films International',
    role: 'Director, DOP, Editor & VFX Artist',
    category: 'Promo',
    overview: 'A high-energy promotional video that required leading a comprehensive, multi-disciplinary pipeline—from the initial camera setup straight through to the final VFX composite. The core objective was to attract extraordinary new talent for the Sky Films 2.0 initiative by blending strong on-set visual direction with a highly stylized, modern post-production workflow.',
    execution: [
      'Direction & Cinematography: Led the overall visual vision as Director and DOP, effectively lighting and framing the talent across distinct persona setups to represent "Fashion," "Presence," and "Personality". Utilized dramatic studio lighting, specifically stark spotlights and edge lighting against a pitch-black backdrop, to establish a bold, high-end aesthetic.',
      'Stylized Editing: Managed the complete editing process, driving a fast-paced and rhythmic flow. Employed aggressive, edgy editing techniques, characterizing the video with rapid cuts, digital glitch transitions, data-moshing effects, and RGB color splitting.',
      'Motion Graphics & VFX: Executed all visual effects and stylistic overlays. Seamlessly integrated kinetic typography by animating descriptive words to appear dynamically alongside the talent\'s movements, maximizing the promotional energy.'
    ],
    videos: [
      '/videos/Sky Films 2.0 Casting Call.mp4'
    ]
  },
  {
    slug: 'uswatte-chirpy-chips-documentary',
    title: 'Uswatte Chirpy Chips: Brand Documentary',
    client: 'Uswatte Confectionery Works (pvt) Ltd',
    agency: '',
    productionHouse: 'Sky Films International',
    role: 'VFX Artist',
    category: 'Documentary',
    overview: 'A cinematic brand documentary detailing the manufacturing process of Uswatte Chirpy Chips. The project required high-impact 3D visual sequences to bookend the live-action factory footage, adding a dynamic and cinematic flair that elevated the storytelling beyond a standard corporate video.',
    execution: [
      'Cinematic 3D Opening: Conceptualized and animated a purely 3D-generated opening sequence featuring a potato entering Earth\'s atmosphere like a meteor. Handled the complete 3D modeling, texturing, space environment lighting, and atmospheric entry effects—including fire and smoke simulations—as the object approached Sri Lanka.',
      'Physics Simulations & Transitions: Executed dynamic 3D physics simulations of potatoes naturally tumbling out of a burlap sack and bouncing on a wooden surface. Rendered and animated floating 3D product packaging alongside falling chip particles to create a seamless visual bridge into the live-action factory segments.',
      'Hyper-Realistic Flavor Visualizations: Designed and composited highly complex, slow-motion 3D motion graphics to visually represent distinct flavor profiles. Simulated the physics of chips, onion rings, red chilies, and tiny salt and pepper particles flying through the air, utilizing precise lighting and compositing against a dark backdrop to ensure the ingredients appeared appetizing and hyper-realistic.'
    ],
    videos: [
      '/videos/Uswatte Chirpy Chips Documentary.mp4'
    ]
  },
  {
    slug: 'uswatte-chirpy-chips-tvc',
    title: 'Uswatte Chirpy Chips: "රිදෙන්න දැනෙන රස" TV Commercial',
    client: 'Uswatta Confactionary PVT (ltd)',
    agency: 'Zuse Colombo',
    productionHouse: 'SKY Films International',
    role: 'VFX Artist',
    category: 'TVC',
    overview: 'A broadcast commercial requiring a flawless transition from a live-action narrative—set in a clinic—into a fully animated, hyper-realistic 3D product sequence. The objective was to deliver appetizing, high-impact visual effects that established a strong closing brand signature.',
    execution: [
      'Broadcast-Quality 3D Modeling: Modeled the brand\'s product packaging entirely from scratch using Blender, specifically highlighting the "Hot N Spicy" bag with realistic textures and lighting.',
      'Dynamic Ingredient Animation: Designed and animated high-speed 3D sequences, including the dynamic slicing of a potato and the precise movement of spice particles hitting the chip.',
      'Physics Simulations: Executed physics-based animations, specifically showcasing the 3D "Hot N Spicy" bag dynamically catching the falling chips.',
      'Compositing & Finishing: Managed all product animation and final compositing utilizing Adobe After Effects.',
      'Final Pack Shot: Engineered the brand\'s closing visual signature by seamlessly integrating 3D modeled assets to display all three flavors (Cheese & Onion, Hot N Spicy, and Salted) alongside floating chip elements.'
    ],
    videos: [
      '/videos/Uswatte Chirpy Chips TVC.mp4'
    ]
  },
  {
    slug: 'eva-mens-day-documentary',
    title: 'Eva: Men\'s Day Documentary',
    client: 'Eva Sri Lanka',
    agency: '',
    productionHouse: 'SKY Films International',
    role: 'VFX Artist',
    category: 'Documentary',
    overview: 'A touching, interview-style brand documentary created to celebrate Men\'s Day. The project required meticulous editorial finishing to ensure narrative accessibility across multiple languages, alongside dynamic motion graphics to deliver a cohesive visual summary and a highly polished broadcast conclusion.',
    execution: [
      'Editorial Finishing & Subtitling: Handled the complete subtitle editing pipeline utilizing Adobe Premiere Pro. Carefully synchronized and timed both English and Tamil text to perfectly match the pacing and emotion of the live-action dialogue.',
      'Motion Graphics Collage: Animated a dynamic, grid-like visual collage in Adobe After Effects as the narrative reached its emotional peak. This sequence featured the smiling faces of the documentary subjects transitioning over a vibrant pink background, timed precisely with the final messaging.',
      'Brand Outro Animation: Designed and animated the final end-brand sequence to deliver a professional, dynamic closing shot. Engineered a stylish reveal of the Eva logo, enhancing it with glowing, magical particle effects and smooth light sweeps for a broadcast-ready signature.'
    ],
    videos: [
      '/videos/Eva Men\'s Day Documentary.mp4'
    ]
  }
];
