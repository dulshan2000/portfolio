import type { Metadata, Viewport } from "next";
import { Syne, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { deliverables } from "@/data/deliverables";
import "./globals.css";

const SITE_URL = "https://dulshan.qzz.io";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0e0e10",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Dulshan Bandara | VFX & Composite Artist · Commercial DOP · Video Editor & Colorist",
    template: "%s | Dulshan Bandara",
  },
  description:
    "Official portfolio of Dulshan Bandara, a Sri Lankan VFX & Composite Artist, Commercial Director of Photography (DOP), Video Editor, and DaVinci Resolve Colorist. 22+ national TV commercials and brand campaigns for People's Bank, SINGER, PickMe, Unilever, Keells, Uswatte, ISSO, and Prime Lands.",
  keywords: [
    "Dulshan Bandara",
    "Dulshan Hareendra Bandara",
    "Dulshan Bandara VFX",
    "Dulshan Bandara SLIIT",
    "Dulshan Bandara Sri Lanka",
    "VFX Artist Sri Lanka",
    "Composite Artist Sri Lanka",
    "Commercial DOP Sri Lanka",
    "DaVinci Resolve Colorist Sri Lanka",
    "Video Editor Sri Lanka",
    "Blender 3D Artist Sri Lanka",
    "After Effects Compositor",
    "Sky Films International VFX",
    "Broadcast TVC VFX Sri Lanka",
    "AI Video Artist Sri Lanka",
  ],
  authors: [{ name: "Dulshan Bandara", url: SITE_URL }],
  creator: "Dulshan Bandara",
  publisher: "Dulshan Bandara",
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: SITE_URL,
    title:
      "Dulshan Bandara // VFX & Composite Artist · Commercial DOP · Editor & Colorist",
    description:
      "Full-pipeline commercial filmmaking & broadcast VFX in Sri Lanka. Explore 22+ national TVCs, 3D simulations, 9:16 commercial direction, and DaVinci Resolve color grading by Dulshan Bandara.",
    siteName: "Dulshan Bandara Portfolio",
    images: [
      {
        url: "/images/photo.jpg",
        width: 1080,
        height: 1350,
        alt: "Dulshan Bandara — VFX & Composite Artist, Commercial DOP, Video Editor & Colorist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Dulshan Bandara | VFX & Composite Artist · Commercial DOP & Colorist",
    description:
      "Official portfolio of Dulshan Bandara — VFX & Composite Artist, Commercial DOP, Video Editor & DaVinci Resolve Colorist based in Sri Lanka.",
    images: ["/images/photo.jpg"],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#dulshan-bandara`,
      name: "Dulshan Bandara",
      alternateName: ["Dulshan Hareendra Bandara", "D. Bandara"],
      url: SITE_URL,
      image: `${SITE_URL}/images/photo.jpg`,
      email: "mailto:dulshanhareendra@gmail.com",
      telephone: "+94763349851",
      jobTitle: [
        "VFX & Composite Artist",
        "Commercial Director of Photography (DOP)",
        "Video Editor",
        "Colorist",
        "3D & Motion Graphics Artist",
      ],
      description:
        "Dulshan Bandara is a Sri Lankan VFX & Composite Artist, Commercial Director of Photography (DOP), Video Editor, and Colorist specializing in national television commercials (TVCs), Blender 3D modeling and simulations, After Effects compositing, DaVinci Resolve color grading, and AI-assisted video workflows.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Colombo",
        addressCountry: "LK",
      },
      nationality: {
        "@type": "Country",
        name: "Sri Lanka",
      },
      alumniOf: [
        {
          "@type": "CollegeOrUniversity",
          name: "Sri Lanka Institute of Information Technology (SLIIT)",
          url: "https://www.sliit.lk/",
        },
      ],
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        name: "BSc (Hons) in Information Technology – Specialising in Interactive Media (2022–2026)",
        recognizedBy: {
          "@type": "CollegeOrUniversity",
          name: "Sri Lanka Institute of Information Technology (SLIIT)",
        },
      },
      knowsAbout: [
        "Visual Effects (VFX)",
        "Node-Based & Layer Compositing",
        "3D Modeling & Animation in Blender",
        "Adobe After Effects",
        "DaVinci Resolve Color Grading",
        "Adobe Premiere Pro Video Editing",
        "Commercial Cinematography (DOP)",
        "Tabletop Food Cinematography",
        "3D Camera Tracking & Match-Moving",
        "Chroma Keying & Rotoscoping",
        "AI Video Workflows (Higgsfield, Beeble, InVideo, Figma Weave)",
        "Adobe Photoshop",
      ],
      knowsLanguage: ["English", "Sinhala"],
      sameAs: [
        "https://www.linkedin.com/in/dulshan-bandara",
        "https://www.instagram.com/dulshan_bandara",
        "https://www.behance.net/dulshanhareend",
        "https://github.com/dulshan2000",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Dulshan Bandara — Official Portfolio",
      description:
        "Full-Pipeline Commercial Filmmaking, Cinematography, Color Grading & Broadcast VFX Portfolio of Dulshan Bandara.",
      publisher: {
        "@id": `${SITE_URL}/#dulshan-bandara`,
      },
    },
    {
      "@type": "ProfilePage",
      "@id": `${SITE_URL}/#profilepage`,
      url: SITE_URL,
      name: "Dulshan Bandara | VFX & Composite Artist · Commercial DOP · Video Editor & Colorist",
      mainEntity: {
        "@id": `${SITE_URL}/#dulshan-bandara`,
      },
      isPartOf: {
        "@id": `${SITE_URL}/#website`,
      },
    },
    {
      "@type": "ItemList",
      "@id": `${SITE_URL}/#deliverables`,
      name: "Dulshan Bandara Broadcast Commercial & VFX Portfolio (22 Deliverables)",
      numberOfItems: deliverables.length,
      itemListElement: deliverables.map((item, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        item: {
          "@type": "CreativeWork",
          name: item.title,
          description: `${item.overview} Role: ${item.role}. Client: ${item.client}. Tools: ${item.tools.join(", ")}.`,
          creator: {
            "@id": `${SITE_URL}/#dulshan-bandara`,
          },
          url: item.driveUrl || SITE_URL,
        },
      })),
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Who is Dulshan Bandara?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Dulshan Bandara is a VFX & Composite Artist, Commercial Director of Photography (DOP), Video Editor, and Colorist based in Colombo, Sri Lanka. He holds a BSc (Hons) in Information Technology specialising in Interactive Media from SLIIT (2022–2026) and previously worked as a VFX Artist at Sky Films International (2024–2025). His official portfolio is at https://dulshan.qzz.io.",
          },
        },
        {
          "@type": "Question",
          name: "What commercial brands and TVCs has Dulshan Bandara worked on?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Dulshan Bandara has delivered 22+ broadcast commercials, documentaries, 9:16 social reels, and 3D real estate visualizers for major brands including People's Bank (People's Remittance TVC), Uswatte Chirpy Chips (TVC & Brand Documentary), SINGER (Simple Pay & Washing Machines TVCs), PickMe Flash, Little Lion, Unilever & Keells Super (Smart Family Promo), ISSO Colombo City Centre, Rich Look, Eva, Prime Lands (Prime Marina & Central Park Boulevard), Rhino Roofing (RBS Cement Panel), and SLIIT.",
          },
        },
        {
          "@type": "Question",
          name: "What software and technical pipeline does Dulshan Bandara specialize in?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Dulshan Bandara executes the full commercial pipeline using Blender (3D modeling, product packaging, environments, fluid & particle simulations), Adobe After Effects (3D camera tracking, match-moving, chroma keying, rotoscoping, screen replacements, motion graphics), DaVinci Resolve (color grading), Adobe Premiere Pro (editing & subtitle localization), Adobe Photoshop, and AI video tools including Higgsfield, Beeble, InVideo, and Figma Weave.",
          },
        },
        {
          "@type": "Question",
          name: "How can I contact or hire Dulshan Bandara?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can contact Dulshan Bandara via his official portfolio at https://dulshan.qzz.io, by email at dulshanhareendra@gmail.com, by phone/WhatsApp at +94 76 33 49 851, on LinkedIn (linkedin.com/in/dulshan-bandara), or on Instagram (@dulshan_bandara).",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=optional"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
        />
      </head>
      <body
        className={`${syne.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable} bg-surface-container-lowest font-body-md text-on-surface antialiased selection:bg-anamorphic-amber selection:text-surface-container-lowest`}
      >
        <div className="film-grain"></div>
        {children}
      </body>
    </html>
  );
}
