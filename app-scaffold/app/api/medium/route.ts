import Parser from "rss-parser";
import { NextResponse } from "next/server";

const parser = new Parser({
  customFields: {
    item: [
      ["media:content", "mediaContent", { keepArray: false }],
      ["media:thumbnail", "mediaThumbnail", { keepArray: false }],
      ["content:encoded", "contentEncoded"],
    ],
  },
});

const MEDIUM_USERNAME = "hallo.khanif";
const MEDIUM_RSS_URL = `https://medium.com/feed/@${MEDIUM_USERNAME}`;

function extractThumbnail(item: Record<string, unknown>): string {
  // Try media:content
  const mc = item.mediaContent as Record<string, string> | undefined;
  if (mc?.url) return mc.url;

  // Try media:thumbnail
  const mt = item.mediaThumbnail as Record<string, string> | undefined;
  if (mt?.url) return mt.url;

  // Extract first img from content:encoded
  const content = (item.contentEncoded || item.content || "") as string;
  const imgMatch = content.match(/<img[^>]+src=["']([^"']+)["']/i);
  if (imgMatch) return imgMatch[1];

  return "";
}

function extractExcerpt(item: Record<string, unknown>): string {
  const content = (item.contentEncoded || item.content || item.summary || "") as string;
  // Strip HTML tags
  const plain = content.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  return plain.slice(0, 200) + (plain.length > 200 ? "…" : "");
}

function extractCategories(item: Record<string, unknown>): string[] {
  const cats = item.categories as string[] | undefined;
  return cats?.slice(0, 3) ?? [];
}

function estimateReadTime(item: Record<string, unknown>): string {
  const content = (item.contentEncoded || item.content || "") as string;
  const plain = content.replace(/<[^>]+>/g, " ");
  const words = plain.split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min`;
}

export async function GET() {
  try {
    const feed = await parser.parseURL(MEDIUM_RSS_URL);

    const posts = feed.items.slice(0, 9).map((item, index) => {
      const rawItem = item as unknown as Record<string, unknown>;
      return {
        id: index + 1,
        title: item.title || "Untitled",
        slug: item.link || "#",
        link: item.link || "#",
        date: item.pubDate
          ? new Date(item.pubDate).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })
          : "",
        readTime: estimateReadTime(rawItem),
        category: extractCategories(rawItem)[0] || "Design",
        categories: extractCategories(rawItem),
        excerpt: extractExcerpt(rawItem),
        thumbnail: extractThumbnail(rawItem),
        author: feed.title?.replace(" – Medium", "") || "Khanif Alfan",
      };
    });

    return NextResponse.json({ posts, total: posts.length });
  } catch (error) {
    console.error("Failed to fetch Medium RSS:", error);
    return NextResponse.json(
      { posts: [], total: 0, error: "Failed to fetch articles" },
      { status: 500 }
    );
  }
}

// Force dynamic to ensure real-time updates from Medium
export const dynamic = 'force-dynamic';
