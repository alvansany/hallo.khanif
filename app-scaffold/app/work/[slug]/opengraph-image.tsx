import { ImageResponse } from "next/og";
import { WORKS } from "@/lib/data";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image({ params }: { params: { slug: string } }) {
  const work = WORKS.find((w) => w.slug === params.slug);

  if (!work) {
    return new ImageResponse(
      (
        <div style={{ background: "#0f172a", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <h1 style={{ color: "white", fontSize: 60 }}>Project Not Found</h1>
        </div>
      )
    );
  }

  // Next.js dynamic OG image can't easily fetch local filesystem images without fs/path,
  // For Vercel Edge compatibility, it's safer to generate a text-based beautiful cover or 
  // use an absolute URL if the image is hosted.
  // We'll create a beautiful dynamic text-based OG card for the case studies.

  return new ImageResponse(
    (
      <div
        style={{
          background: "#0f172a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "60px",
          fontFamily: "Inter, sans-serif",
          position: "relative",
        }}
      >
        {/* Decorative elements */}
        <div style={{ position: "absolute", top: -100, right: -100, width: 400, height: 400, background: "#FE4820", opacity: 0.2, filter: "blur(100px)", borderRadius: "50%" }} />
        <div style={{ position: "absolute", bottom: -100, left: -100, width: 400, height: 400, background: "#FE4820", opacity: 0.1, filter: "blur(100px)", borderRadius: "50%" }} />

        <div style={{ display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between", zIndex: 10 }}>
          {/* Top: Category & Tags */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div style={{ fontSize: 24, fontWeight: 700, color: "#FE4820", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              {work.category}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {work.tags.slice(0, 3).map((tag) => (
                <div key={tag} style={{ padding: "8px 16px", background: "rgba(255,255,255,0.1)", borderRadius: "100px", color: "#e2e8f0", fontSize: 20 }}>
                  {tag}
                </div>
              ))}
            </div>
          </div>

          {/* Middle: Title */}
          <div style={{ display: "flex", flexDirection: "column", marginTop: "auto", marginBottom: "auto" }}>
            <h1 style={{ fontSize: 72, fontWeight: 900, color: "#ffffff", lineHeight: 1.1, marginBottom: 20, letterSpacing: "-0.03em" }}>
              {work.title}
            </h1>
            <p style={{ fontSize: 32, color: "#94a3b8", lineHeight: 1.4, maxWidth: "80%" }}>
              {work.summary.slice(0, 120)}...
            </p>
          </div>

          {/* Bottom: Footer Info */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", borderTop: "2px solid rgba(255,255,255,0.1)", paddingTop: "30px" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: 20, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "5px" }}>Client</span>
              <span style={{ fontSize: 28, color: "#ffffff", fontWeight: 600 }}>{work.client}</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
              <span style={{ fontSize: 20, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "5px" }}>Role</span>
              <span style={{ fontSize: 28, color: "#ffffff", fontWeight: 600 }}>{work.role}</span>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
