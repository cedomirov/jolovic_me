import { siteConfig } from "@/data/content";

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: `${siteConfig.name} — ${siteConfig.title}`,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      postalCode: siteConfig.address.zip,
      addressRegion: siteConfig.address.area,
      addressCountry: "RS",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.address.lat,
      longitude: siteConfig.address.lng,
    },
    areaServed: [
      { "@type": "City", name: "Beograd" },
      { "@type": "Place", name: "Višnjička Banja" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "14:00",
      },
    ],
    medicalSpecialty: "SpeechPathology",
    priceRange: "$$",
  };
}

export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: "Logoped",
    worksFor: {
      "@type": "MedicalBusiness",
      name: `${siteConfig.name} — ${siteConfig.title}`,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.address.city,
      addressCountry: "RS",
    },
  };
}

export function generateArticleSchema(article: {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    author: {
      "@type": "Person",
      name: siteConfig.name,
    },
    publisher: {
      "@type": "Organization",
      name: `${siteConfig.name} — ${siteConfig.title}`,
    },
    datePublished: article.date,
    mainEntityOfPage: `${siteConfig.url}/blog/${article.slug}`,
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateFAQSchema(
  faqs: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
