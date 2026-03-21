import Link from "next/link";
import { Wave } from "./Wave";
import { siteConfig } from "@/data/content";

const footerLinks = [
  {
    title: "Stranice",
    links: [
      { label: "Početna", href: "/" },
      { label: "O nama", href: "/o-nama" },
      { label: "Blog", href: "/blog" },
      { label: "Kontakt", href: "/kontakt" },
    ],
  },
  {
    title: "Usluge",
    links: [
      { label: "Logopedija", href: "/#usluge" },
      { label: "Rana intervencija", href: "/#usluge" },
      { label: "Online terapija", href: "/#usluge" },
    ],
  },
  {
    title: "Info",
    links: [
      { label: "Radno vreme", href: "/kontakt" },
      { label: "Lokacija", href: "/kontakt" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-dark text-white pt-12 pb-6 px-6">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-7 mb-9">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Wave size={20} color="#E8A48E" />
              <span className="font-serif text-[17px]">{siteConfig.name}</span>
            </div>
            <p className="text-xs leading-relaxed text-white/50 max-w-[240px]">
              Logoped u Beogradu. Govorno-jezička terapija za decu i odrasle.
            </p>
            <div className="mt-4 text-xs text-white/40">
              <p>{siteConfig.address.street}</p>
              <p>{siteConfig.address.zip} {siteConfig.address.city}, {siteConfig.address.area}</p>
              <p className="mt-1">{siteConfig.phone}</p>
              <p>{siteConfig.email}</p>
            </div>
          </div>
          {footerLinks.map((section) => (
            <div key={section.title}>
              <div className="text-[10px] font-semibold uppercase tracking-widest text-white/30 mb-3">
                {section.title}
              </div>
              {section.links.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="block text-xs text-white/60 py-0.5 hover:text-white/90 transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div className="border-t border-white/[0.08] pt-4 text-[10px] text-white/25">
          © {new Date().getFullYear()} {siteConfig.name} — {siteConfig.title}
        </div>
      </div>
    </footer>
  );
}
