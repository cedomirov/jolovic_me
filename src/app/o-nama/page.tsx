import type { Metadata } from "next";
import { Blob } from "@/components/Blob";
import { Btn } from "@/components/Btn";
import { aboutContent, siteConfig } from "@/data/content";
import { generateBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "O nama — Logoped Tijana Jolovi\u0107",
  description:
    "Upoznajte logopeda Tijanu Jolovi\u0107. Stru\u010dnjak za govorno-jezi\u010dku terapiju, ranu intervenciju i defektologiju u Beogradu, Vi\u0161nji\u010dka Banja.",
  alternates: {
    canonical: `${siteConfig.url}/o-nama`,
  },
};

export default function AboutPage() {
  const breadcrumbs = generateBreadcrumbSchema([
    { name: "Po\u010detna", url: siteConfig.url },
    { name: "O nama", url: `${siteConfig.url}/o-nama` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      {/* Hero */}
      <section className="bg-cream pt-12 pb-14 px-6 relative overflow-hidden">
        <Blob color="#8BA888" className="w-[500px] h-[500px] -top-24 -right-20" />
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-1">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-widest text-terra">
              O nama
            </div>
            <h1 className="font-serif text-3xl lg:text-4xl text-dark mt-1.5 leading-tight whitespace-pre-line">
              {aboutContent.heroTitle}
            </h1>
            <p className="text-[15px] leading-relaxed text-gray mt-4 max-w-[420px]">
              {aboutContent.heroDescription}
            </p>
          </div>
          <div className="aspect-[4/3] rounded-[20px] bg-gradient-to-br from-sage-light to-peach flex items-center justify-center">
            <span className="text-[13px] text-gray">Fotografija</span>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-6">
        <div className="max-w-[1100px] mx-auto text-center mb-10">
          <h2 className="font-serif text-[28px] text-dark">Na\u0161e vrednosti</h2>
        </div>
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-7">
          {aboutContent.values.map((v) => (
            <div key={v.title} className="text-center py-7 px-5">
              <div className="text-[32px] mb-3">{v.icon}</div>
              <h3 className="font-serif text-lg text-dark mb-1.5">{v.title}</h3>
              <p className="text-[13px] leading-relaxed text-gray">
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Credentials */}
      <section className="py-10 px-6 bg-white">
        <div className="max-w-[1100px] mx-auto flex justify-center gap-9 flex-wrap">
          {aboutContent.credentials.map((c) => (
            <div key={c} className="flex items-center gap-1.5">
              <div className="w-[7px] h-[7px] rounded-full bg-sage" />
              <span className="text-[13px] text-gray">{c}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark py-14 px-6 text-center">
        <h2 className="font-serif text-2xl text-white mb-2.5">
          \u017delite da zaka\u017eete konsultaciju?
        </h2>
        <p className="text-sm text-white/50 mb-6">
          Prva konsultacija je besplatna i bez obaveze.
        </p>
        <Btn href="/kontakt" variant="primary">
          Zaka\u017ei termin
        </Btn>
      </section>
    </>
  );
}
