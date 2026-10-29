import { notFound } from "next/navigation";
import Topbar from "../components/Topbar";
import Blocks from "../components/Blocks";
import Close from "../components/Close";
import { contentSlugs, contentPage } from "../lib/content";

/**
 * Pages made from content/pages/<slug>.json (the safe-edit MCP creates
 * these). Only a single path segment, only slugs that have a file; every
 * other URL is a normal 404. Built statically at deploy time.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return contentSlugs().map((slug) => ({ slug: [slug] }));
}

function load(params) {
  const { slug } = params;
  if (!slug || slug.length !== 1) return null;
  return contentPage(slug[0]);
}

export async function generateMetadata({ params }) {
  const page = load(await params);
  if (!page) return {};
  const { title, description, ogImage } = page.meta;
  const slug = (await params).slug[0];
  return {
    title,
    description,
    alternates: { canonical: `/${slug}` },
    ...(ogImage ? { openGraph: { images: [ogImage] } } : {}),
  };
}

export default async function ContentPage({ params }) {
  const page = load(await params);
  if (!page) notFound();

  const faqs = page.blocks.filter((b) => b.type === "faq").flatMap((b) => b.items);
  const jsonLd = faqs.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q.replace(/\*\*|\[([^\]]+)\]\([^)]*\)/g, "$1"),
          acceptedAnswer: { "@type": "Answer", text: f.a.replace(/\*\*|\[([^\]]+)\]\([^)]*\)/g, "$1") },
        })),
      }
    : null;

  return (
    <>
      <Topbar />
      <main>
        <Blocks blocks={page.blocks} />
        <Close />
      </main>
      {jsonLd ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      ) : null}
    </>
  );
}
