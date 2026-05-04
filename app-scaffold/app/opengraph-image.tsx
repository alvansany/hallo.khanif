import { ImageResponse } from "next/og";

export const alt = "Khanif Alfan — UI/UX Designer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0f172a", // slate-900
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Inter, sans-serif",
          padding: "40px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: "#1e293b", // slate-800
            borderRadius: "20px",
            padding: "80px",
            border: "1px solid #334155", // slate-700
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.2)",
            width: "100%",
            height: "100%",
          }}
        >
          <div
            style={{
              fontSize: 80,
              fontWeight: 900,
              color: "#ffffff",
              marginBottom: 20,
              letterSpacing: "-0.05em",
              lineHeight: 1,
            }}
          >
            Khanif Alfan
          </div>
          <div
            style={{
              fontSize: 36,
              fontWeight: 500,
              color: "#94a3b8", // slate-400
              marginBottom: 40,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            UI/UX Designer
          </div>
          
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "auto",
            }}
          >
            <div
              style={{
                fontSize: 24,
                color: "#cbd5e1", // slate-300
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="#cbd5e1"/>
              </svg>
              Yogyakarta, Indonesia
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
