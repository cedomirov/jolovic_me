"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Wave } from "./Wave";

const links = [
  { href: "/", label: "Početna" },
  { href: "/o-nama", label: "O nama" },
  { href: "/blog", label: "Blog" },
  { href: "/kontakt", label: "Kontakt" },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-cream/92 backdrop-blur-2xl border-b border-line">
      <div className="max-w-[1100px] mx-auto px-6 flex items-center justify-between h-[58px]">
        <Link href="/" className="flex items-center gap-2">
          <Wave size={24} />
          <span className="font-serif text-[19px] text-dark">Tijana Jolović</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`rounded-2xl px-4 py-1.5 text-xs font-medium transition-colors ${
                pathname === href
                  ? "bg-terra text-white"
                  : "text-gray hover:text-dark"
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/kontakt"
            className="ml-2 bg-dark text-white rounded-2xl px-4 py-1.5 text-xs font-medium hover:opacity-90 transition-opacity"
          >
            Zakaži termin
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Meni"
        >
          <span className={`block w-5 h-0.5 bg-dark transition-transform ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-dark transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-dark transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-line bg-cream px-6 py-4 space-y-2">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`block rounded-xl px-4 py-2.5 text-sm font-medium ${
                pathname === href
                  ? "bg-terra text-white"
                  : "text-gray hover:text-dark"
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/kontakt"
            onClick={() => setOpen(false)}
            className="block bg-dark text-white rounded-xl px-4 py-2.5 text-sm font-medium text-center mt-2"
          >
            Zakaži termin
          </Link>
        </div>
      )}
    </nav>
  );
}
