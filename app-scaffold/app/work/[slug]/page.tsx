import { WORKS } from "@/lib/data";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import CaseStudyClient from "./CaseStudyClient";

export async function generateStaticParams() {
  return WORKS.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const work = WORKS.find((w) => w.slug === params.slug);
  if (!work) return {};
  return {
    title: work.title,
    description: work.summary,
  };
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const work = WORKS.find((w) => w.slug === params.slug);
  if (!work) notFound();
  return <CaseStudyClient work={work} />;
}
