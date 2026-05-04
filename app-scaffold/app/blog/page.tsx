import type { Metadata } from "next";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title: "Blog — Design Insights & Perspectives",
  description:
    "Articles on UI/UX design, design systems, AI-assisted design, and digital product thinking by Khanif Alfan.",
};

// Force dynamic rendering to ensure real-time Medium posts
export const dynamic = 'force-dynamic';

export interface BlogPost {
  id: string | number;
  title: string;
  category: string;
  categories?: string[];
  readTime: string;
  date: string;
  pubDate?: string;
  excerpt: string;
  link: string;
  thumbnail?: string;
  featured?: boolean;
}

// Fallback posts shown when Medium is unreachable
const FALLBACK_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "Writing on Medium — Articles Coming Soon",
    category: "Design",
    readTime: "1 min",
    date: "2025",
    excerpt:
      "I write about UI/UX design, design systems, and AI-assisted workflows on Medium. Follow me at @hallo.khanif to stay updated.",
    link: "https://medium.com/@hallo.khanif",
    featured: true,
  },
];

async function getMediumPosts(): Promise<BlogPost[]> {
  try {
    // Use absolute URL for server-side fetch in Next.js
    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL ||
      (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

    const res = await fetch(`${baseUrl}/api/medium`, {
      cache: 'no-store',
    });

    if (!res.ok) throw new Error(`API responded with ${res.status}`);

    const data = await res.json();

    if (!data.posts?.length) return FALLBACK_POSTS;

    return data.posts.map((p: Record<string, unknown>, i: number) => ({
      ...p,
      id: String(i + 1),
      featured: i === 0,
    }));
  } catch (err) {
    console.warn("Medium fetch failed, using fallback:", err);
    return FALLBACK_POSTS;
  }
}

export default async function BlogPage() {
  const posts = await getMediumPosts();
  return <BlogClient posts={posts} />;
}
