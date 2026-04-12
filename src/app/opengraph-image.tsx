import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt =
  "Quilliam AI — AI Education and Implementation for UK Businesses";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logoData = await readFile(
    join(process.cwd(), "public/og-logo.png"),
    "base64"
  );
  const logoSrc = `data:image/png;base64,${logoData}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#0c0a09",
          padding: "60px 80px",
          position: "relative",
        }}
      >
        {/* Subtle dot grid overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              "radial-gradient(circle, rgba(16,185,129,0.08) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            display: "flex",
          }}
        />

        {/* Emerald glow behind logo */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "180px",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "rgba(16,185,129,0.06)",
            filter: "blur(80px)",
            transform: "translateY(-50%)",
            display: "flex",
          }}
        />

        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            width: "260px",
            height: "260px",
            marginRight: "60px",
          }}
        >
          <img src={logoSrc} width={260} height={260} />
        </div>

        {/* Divider */}
        <div
          style={{
            width: "2px",
            height: "280px",
            background: "rgba(16,185,129,0.25)",
            flexShrink: 0,
            marginRight: "60px",
            display: "flex",
          }}
        />

        {/* Text content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flex: 1,
          }}
        >
          {/* Brand name */}
          <div
            style={{
              fontSize: "22px",
              fontWeight: 600,
              color: "#10B981",
              letterSpacing: "4px",
              textTransform: "uppercase",
              marginBottom: "24px",
              display: "flex",
            }}
          >
            QUILLIAM AI
          </div>

          {/* Headline */}
          <div
            style={{
              fontSize: "48px",
              fontWeight: 700,
              color: "#FFFFFF",
              letterSpacing: "-1px",
              lineHeight: 1.15,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>We teach AI.</span>
            <span>We build with AI.</span>
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: "20px",
              color: "#a8a29e",
              marginTop: "20px",
              display: "flex",
            }}
          >
            A UK AI agency. Education + Implementation. Handoff-first.
          </div>

          {/* URL */}
          <div
            style={{
              fontSize: "16px",
              color: "#10B981",
              opacity: 0.7,
              marginTop: "16px",
              letterSpacing: "1px",
              display: "flex",
            }}
          >
            quilliam.ai
          </div>
        </div>

        {/* Bottom accent bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "6px",
            background:
              "linear-gradient(90deg, #10B981 0%, #059669 50%, #10B981 100%)",
            display: "flex",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
