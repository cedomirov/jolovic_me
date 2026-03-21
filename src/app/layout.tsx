import type { Metadata } from "next";
import { DM_Serif_Display, Outfit } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { generateLocalBusinessSchema, generatePersonSchema } from "@/lib/seo";
import { siteConfig } from "@/data/content";

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin", "latin-ext"],
  variable: "--font-dm-serif",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin", "latin-ext"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Logoped Beograd — Tijana Jolovi\u0107 | Logopedija i govorno-jezi\u010dka terapija",
    template: "%s | Tijana Jolovi\u0107 — Logoped Beograd",
  },
  description:
    "Logoped u Beogradu — Tijana Jolovi\u0107. Stru\u010dna logopedska terapija za decu i odrasle. Govorno-jezi\u010dka terapija, rana intervencija, korekcija izgovora. Vi\u0161nji\u010dka Banja, Beograd.",
  keywords: [
    "logoped",
    "logoped beograd",
    "logopedija",
    "logopedija beograd",
    "defektolog",
    "defektolog beograd",
    "defektologija",
    "surdolog",
    "govorno-jezi\u010dka terapija",
    "logoped vi\u0161nji\u010dka banja",
    "terapija govora",
    "rana intervencija",
    "korekcija izgovora",
    "disleksija",
    "disgrafija",
    "logoped za decu",
    "logoped za odrasle",
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    type: "website",
    locale: "sr_RS",
    url: siteConfig.url,
    siteName: `${siteConfig.name} — ${siteConfig.title}`,
    title: "Logoped Beograd — Tijana Jolovi\u0107 | Logopedija i govorno-jezi\u010dka terapija",
    description:
      "Stru\u010dna logopedska terapija za decu i odrasle u Beogradu. Besplatna prva konsultacija.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Logoped Beograd — Tijana Jolovi\u0107",
    description:
      "Stru\u010dna logopedska terapija za decu i odrasle u Beogradu.",
  },
  alternates: {
    canonical: siteConfig.url,
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const businessSchema = generateLocalBusinessSchema();
  const personSchema = generatePersonSchema();

  return (
    <html lang="sr" className={`${dmSerif.variable} ${outfit.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans antialiased">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
