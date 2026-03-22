import { Blob } from "@/components/Blob";
import { Btn } from "@/components/Btn";
import { SvcCard } from "@/components/SvcCard";
import { siteConfig, testimonial } from "@/data/content";
import { services } from "@/data/services";
import { generateFAQSchema } from "@/lib/seo";

const faqs = [
  {
    question: "Kada dete treba da poseti logopeda?",
    answer:
      "Ako dete ne izgovara prve re\u010di do 16 meseci, ne spaja dve re\u010di do 24 meseca, ili imate bilo kakvu zabrinutost oko govorno-jezi\u010dkog razvoja, preporu\u010dujemo konsultaciju sa logopedom.",
  },
  {
    question: "Koliko traje logopedska terapija?",
    answer:
      "Trajanje zavisi od vrste poreme\u0107aja. Korekcija izgovora jednog glasa obi\u010dno traje 2-4 meseca, dok kompleksnije te\u0161ko\u0107e mogu zahtevati 6-12 meseci terapije.",
  },
  {
    question: "Da li radite sa odraslima?",
    answer:
      "Da, pru\u017eamo logopedske usluge i za odrasle \u2014 terapiju glasa, rehabilitaciju govora nakon mo\u017edanog udara, terapiju mucanja i druge govorno-jezi\u010dke te\u0161ko\u0107e.",
  },
  {
    question: "Koliko ko\u0161ta logopedska terapija u Beogradu?",
    answer:
      "Prva konsultacija je besplatna. Za redovne sesije, pozovite nas za detaljan cenovnik. Nudimo pristupa\u010dne cene logopedske terapije u Beogradu.",
  },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(faqs)) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-cream px-6">
        <Blob color="#C4725A" className="w-[500px] h-[500px] -top-20 -right-24" />
        <Blob color="#8BA888" className="w-[400px] h-[400px] -bottom-16 -left-20" />
        <div className="max-w-[1100px] mx-auto pt-16 pb-10 relative z-1">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-1.5 bg-sage-light rounded-2xl px-3 py-1 mb-5">
                <div className="w-1.5 h-1.5 rounded-full bg-sage" />
                <span className="text-[11px] font-medium text-sage-dark">
                  Zakazivanje otvoreno
                </span>
              </div>
              <h1 className="font-serif text-4xl lg:text-[46px] leading-[1.08] text-dark mb-4">
                Svaki glas
                <br />
                zaslu\u017euje da
                <br />
                bude <em className="text-terra">\u010duven</em>
              </h1>
              <p className="text-[15px] leading-relaxed text-gray max-w-[380px] mb-6">
                Stru\u010dna logopedska terapija za decu i odrasle u Beogradu.
                Gradimo samopouzdanje, razvijamo komunikaciju.
              </p>
              <div className="flex flex-wrap gap-3">
                <Btn href="/kontakt" variant="primary">
                  Zaka\u017ei konsultaciju
                </Btn>
                <Btn href="/o-nama">Upoznaj nas</Btn>
              </div>
              <div className="flex gap-7 mt-8">
                {siteConfig.stats.map(({ value, label }) => (
                  <div key={value}>
                    <div className="font-serif text-2xl text-terra">{value}</div>
                    <div className="text-[10px] text-gray">{label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="w-full aspect-[4/5] rounded-[22px] bg-gradient-to-br from-peach to-sand flex items-center justify-center flex-col gap-1.5">
                <span className="text-xs text-gray">Hero fotografija</span>
              </div>
              <div className="absolute -bottom-3.5 -left-3.5 bg-white rounded-xl px-4 py-3 shadow-lg flex items-center gap-2 z-2">
                <div className="w-8 h-8 rounded-lg bg-sage-light flex items-center justify-center text-sm">
                  ★
                </div>
                <div>
                  <div className="text-xs font-semibold text-dark">
                    4.9 Google ocena
                  </div>
                  <div className="text-[10px] text-gray">128 recenzija</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="usluge" className="bg-white py-16 px-6">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-10">
            <div className="text-[11px] font-semibold uppercase tracking-widest text-terra">
              Na\u0161e usluge
            </div>
            <h2 className="font-serif text-3xl text-dark mt-1">
              Kako vam mo\u017eemo pomo\u0107i
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((svc) => (
              <SvcCard key={svc.title} {...svc} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-cream py-16 px-6 relative overflow-hidden">
        <Blob color="#C4725A" className="w-[500px] h-[500px] -top-20 left-[40%]" />
        <div className="max-w-[640px] mx-auto text-center relative z-1">
          <div className="text-[40px] text-terra-light font-serif">&ldquo;</div>
          <blockquote className="font-serif text-xl leading-relaxed text-dark italic mb-5">
            {testimonial.quote}
          </blockquote>
          <div className="inline-flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-sand" />
            <div className="text-left">
              <div className="text-xs font-semibold text-dark">
                {testimonial.author}
              </div>
              <div className="text-[11px] text-gray">{testimonial.role}</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-[800px] mx-auto">
          <div className="text-center mb-10">
            <div className="text-[11px] font-semibold uppercase tracking-widest text-terra">
              \u010cesta pitanja
            </div>
            <h2 className="font-serif text-3xl text-dark mt-1">
              Pitanja koja roditelji naj\u010de\u0161\u0107e postavljaju
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="border border-line rounded-2xl p-6"
              >
                <h3 className="font-serif text-lg text-dark mb-2">
                  {faq.question}
                </h3>
                <p className="text-sm leading-relaxed text-gray">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark py-14 px-6 text-center">
        <h2 className="font-serif text-2xl text-white mb-2.5">
          Hajde da zapo\u010dnemo zajedno
        </h2>
        <p className="text-sm text-white/50 mb-6">
          Prva konsultacija je besplatna.
        </p>
        <Btn href="/kontakt" variant="primary">
          Zaka\u017ei termin
        </Btn>
      </section>
    </>
  );
}
