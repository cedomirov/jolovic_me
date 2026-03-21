import type { Metadata } from "next";
import { Btn } from "@/components/Btn";
import { siteConfig } from "@/data/content";
import { generateBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Kontakt — Logoped Beograd, Vi\u0161nji\u010dka Banja",
  description:
    "Zaka\u017eite besplatnu prvu konsultaciju sa logopedom Tijanom Jolovi\u0107. Slana\u010dki put 76, Vi\u0161nji\u010dka Banja, Beograd. Logopedija za decu i odrasle.",
  alternates: {
    canonical: `${siteConfig.url}/kontakt`,
  },
};

const contactInfo = [
  { icon: "\ud83d\udccd", label: "Adresa", value: `${siteConfig.address.street}, ${siteConfig.address.city}` },
  { icon: "\ud83d\udcde", label: "Telefon", value: siteConfig.phone },
  { icon: "\u2709\ufe0f", label: "Email", value: siteConfig.email },
  { icon: "\ud83d\udd50", label: "Radno vreme", value: siteConfig.workingHours },
];

export default function ContactPage() {
  const breadcrumbs = generateBreadcrumbSchema([
    { name: "Po\u010detna", url: siteConfig.url },
    { name: "Kontakt", url: `${siteConfig.url}/kontakt` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      <section className="py-12 px-6">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14">
          {/* Form */}
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-widest text-terra">
              Kontakt
            </div>
            <h1 className="font-serif text-4xl text-dark mt-1.5">
              Javite nam se
            </h1>
            <p className="text-sm text-gray mt-2.5 leading-relaxed mb-8">
              Prva konsultacija je besplatna i bez obaveze.
            </p>

            <form className="space-y-5">
              {[
                { label: "Va\u0161e ime", placeholder: "Ime i prezime", type: "text", name: "name" },
                { label: "Email", placeholder: "email@primer.com", type: "email", name: "email" },
                { label: "Telefon", placeholder: "+381 6X XXX XXXX", type: "tel", name: "phone" },
              ].map((f) => (
                <div key={f.name}>
                  <label className="block text-xs font-medium text-dark mb-1">
                    {f.label}
                  </label>
                  <input
                    type={f.type}
                    name={f.name}
                    placeholder={f.placeholder}
                    className="w-full px-3.5 py-2.5 rounded-[10px] border-[1.5px] border-line text-sm text-dark"
                  />
                </div>
              ))}

              <div>
                <label className="block text-xs font-medium text-dark mb-1">
                  Uzrast deteta
                </label>
                <div className="flex gap-1.5 flex-wrap">
                  {["0\u20132 god.", "2\u20134 god.", "4\u20137 god.", "7+ god.", "Odrasli"].map(
                    (age) => (
                      <label
                        key={age}
                        className="border-[1.5px] border-line rounded-2xl px-3.5 py-1.5 text-xs text-gray cursor-pointer hover:border-terra transition-colors has-[:checked]:bg-terra has-[:checked]:text-white has-[:checked]:border-terra"
                      >
                        <input type="radio" name="age" value={age} className="sr-only" />
                        {age}
                      </label>
                    )
                  )}
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-dark mb-1">
                  Opi\u0161ite situaciju
                </label>
                <textarea
                  name="message"
                  placeholder="Ukratko opi\u0161ite razlog kontakta..."
                  rows={4}
                  className="w-full px-3.5 py-2.5 rounded-[10px] border-[1.5px] border-line text-sm text-dark resize-y"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-terra text-white rounded-3xl py-3 text-sm font-medium hover:bg-terra-dark transition-colors"
              >
                Po\u0161aljite poruku
              </button>
            </form>
          </div>

          {/* Info */}
          <div>
            <div className="bg-cream rounded-[20px] p-8 mb-5">
              <h2 className="font-serif text-xl text-dark mb-5">Informacije</h2>
              {contactInfo.map((x) => (
                <div key={x.label} className="flex gap-3 mb-4">
                  <div className="w-9 h-9 rounded-[10px] bg-white flex items-center justify-center text-base shrink-0">
                    {x.icon}
                  </div>
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-wider text-gray">
                      {x.label}
                    </div>
                    <div className="text-sm text-dark mt-0.5">{x.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="w-full aspect-[16/10] rounded-[18px] bg-gradient-to-br from-sage-light to-line border border-line flex items-center justify-center">
              <div className="text-center">
                <span className="text-[28px]">\ud83d\udccd</span>
                <div className="text-[13px] text-gray mt-1.5">Google Maps</div>
              </div>
            </div>

            {/* Urgent CTA */}
            <div className="mt-5 bg-dark rounded-[18px] py-6 px-7 text-white text-center">
              <h3 className="font-serif text-lg">Hitno vam treba termin?</h3>
              <p className="text-xs text-white/50 mt-1.5">
                Pozovite za zakazivanje u roku od 24h.
              </p>
              <div className="font-serif text-[22px] text-terra-light mt-2.5">
                {siteConfig.phone}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
