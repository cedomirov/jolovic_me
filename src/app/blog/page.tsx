import type { Metadata } from "next";
import Link from "next/link";
import { Wave } from "@/components/Wave";
import { posts } from "@/data/posts";
import { siteConfig } from "@/data/content";
import { generateBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Blog — Logopedija, saveti za roditelje",
  description:
    "Stru\u010dni \u010dlanci o logopediji, govorno-jezi\u010dkom razvoju, savetima za roditelje. Blog logopeda Tijane Jolovi\u0107 iz Beograda.",
  alternates: {
    canonical: `${siteConfig.url}/blog`,
  },
};

export default function BlogPage() {
  const breadcrumbs = generateBreadcrumbSchema([
    { name: "Po\u010detna", url: siteConfig.url },
    { name: "Blog", url: `${siteConfig.url}/blog` },
  ]);

  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      <section className="bg-cream py-11 px-6 text-center">
        <div className="text-[11px] font-semibold uppercase tracking-widest text-terra">
          Blog
        </div>
        <h1 className="font-serif text-[34px] text-dark mt-1">
          \u010citajte, u\u010dite, rastite
        </h1>
      </section>

      {/* Featured post */}
      <div className="px-6 py-4 max-w-[1100px] mx-auto">
        <Link
          href={`/blog/${featured.slug}`}
          className="grid grid-cols-1 lg:grid-cols-2 bg-cream rounded-[20px] overflow-hidden hover:-translate-y-0.5 transition-transform"
        >
          <div
            className="aspect-[16/10] flex items-center justify-center"
            style={{
              background: `linear-gradient(135deg, ${featured.bgColor}, #FAF6F1)`,
            }}
          >
            <Wave size={32} color="#E8A48E" />
          </div>
          <div className="p-6 lg:p-8 flex flex-col justify-center">
            <div className="text-[10px] font-semibold uppercase tracking-wider text-terra">
              {featured.category}
            </div>
            <h2 className="font-serif text-xl lg:text-2xl text-dark mt-1 leading-snug">
              {featured.title}
            </h2>
            <p className="text-[13px] text-gray leading-relaxed mt-2">
              {featured.excerpt}
            </p>
            <div className="text-[11px] text-gray mt-3 opacity-50">
              {featured.date}
            </div>
          </div>
        </Link>
      </div>

      {/* Post grid */}
      <div className="px-6 pb-16 max-w-[1100px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {rest.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="rounded-2xl overflow-hidden border border-line hover:-translate-y-1 hover:shadow-lg transition-all"
          >
            <div
              className="aspect-[16/10] flex items-center justify-center"
              style={{
                background: `linear-gradient(135deg, ${post.bgColor}, #FAF6F1)`,
              }}
            >
              <Wave size={24} color="#E8A48E" />
            </div>
            <div className="p-4 pb-5">
              <div className="text-[9px] font-semibold uppercase tracking-wider text-terra">
                {post.category}
              </div>
              <h3 className="font-serif text-[15px] text-dark mt-1 leading-snug">
                {post.title}
              </h3>
              <p className="text-[11px] text-gray leading-relaxed mt-1">
                {post.excerpt}
              </p>
              <div className="text-[10px] text-gray mt-2.5 opacity-40">
                {post.date}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
