import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Btn } from "@/components/Btn";
import { Wave } from "@/components/Wave";
import { posts, getPostBySlug, getAllSlugs } from "@/data/posts";
import { siteConfig } from "@/data/content";
import {
  generateArticleSchema,
  generateBreadcrumbSchema,
} from "@/lib/seo";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `${siteConfig.url}/blog/${slug}`,
    },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `${siteConfig.url}/blog/${slug}`,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const articleSchema = generateArticleSchema(post);
  const breadcrumbs = generateBreadcrumbSchema([
    { name: "Po\u010detna", url: siteConfig.url },
    { name: "Blog", url: `${siteConfig.url}/blog` },
    { name: post.title, url: `${siteConfig.url}/blog/${slug}` },
  ]);

  // Convert markdown-like content to basic HTML
  const contentHtml = post.content
    .split("\n\n")
    .map((block) => {
      if (block.startsWith("## ")) {
        return `<h2 class="font-serif text-xl mt-8 mb-3 text-dark">${block.slice(3)}</h2>`;
      }
      if (block.startsWith("> ")) {
        return `<blockquote class="border-l-[3px] border-terra pl-6 py-3 my-7 font-serif text-lg italic text-terra-dark leading-relaxed">${block.slice(2)}</blockquote>`;
      }
      if (block.startsWith("- ") || block.startsWith("1. ")) {
        const items = block.split("\n").map((line) => {
          const text = line.replace(/^[-\d]+\.\s*/, "").replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
          return `<li>${text}</li>`;
        });
        const tag = block.startsWith("1.") ? "ol" : "ul";
        return `<${tag} class="list-disc pl-6 space-y-1 my-4 text-dark text-[15px] leading-relaxed">${items.join("")}</${tag}>`;
      }
      const text = block.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
      return `<p class="my-4">${text}</p>`;
    })
    .join("");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      <div className="bg-cream py-9 px-6">
        <div className="max-w-[660px] mx-auto">
          <Link
            href="/blog"
            className="text-xs text-terra hover:text-terra-dark transition-colors"
          >
            &larr; Nazad na blog
          </Link>
          <div className="text-[10px] font-semibold uppercase tracking-wider text-terra mt-4">
            {post.category}
          </div>
          <h1 className="font-serif text-3xl lg:text-[34px] text-dark mt-1 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-2.5 mt-4">
            <div className="w-8 h-8 rounded-full bg-sand" />
            <div>
              <div className="text-xs font-medium text-dark">
                {siteConfig.name}
              </div>
              <div className="text-[11px] text-gray">
                {post.date} \u00b7 {post.readTime}
              </div>
            </div>
          </div>
        </div>
      </div>

      <article className="max-w-[660px] mx-auto px-6 pt-9 pb-16">
        <div
          className="w-full aspect-video rounded-2xl mb-8 flex items-center justify-center"
          style={{
            background: `linear-gradient(135deg, ${post.bgColor}, #FAF6F1)`,
          }}
        >
          <span className="text-xs text-gray">Naslovna fotografija</span>
        </div>

        <div
          className="text-[15px] leading-[1.85] text-dark"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />

        <div className="mt-11 p-7 rounded-2xl bg-cream text-center">
          <h3 className="font-serif text-lg text-dark">
            Imate pitanja o govoru va\u0161eg deteta?
          </h3>
          <p className="text-[13px] text-gray mt-1">
            Zaka\u017eite besplatnu konsultaciju.
          </p>
          <div className="mt-3.5">
            <Btn href="/kontakt" variant="primary">
              Zaka\u017ei konsultaciju
            </Btn>
          </div>
        </div>
      </article>
    </>
  );
}
