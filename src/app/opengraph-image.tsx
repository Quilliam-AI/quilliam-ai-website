import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt =
  "Quilliam AI - practical AI consulting and implementation for UK businesses";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logoData = await readFile(
    join(process.cwd(), "public/og-logo.png"),
    "base64",
  );
  const logoSrc = `data:image/png;base64,${logoData}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#f4efe4",
          color: "#12100c",
          position: "relative",
          overflow: "hidden",
          padding: "54px 64px",
          fontFamily: "Arial",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(18,16,12,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(18,16,12,0.04) 1px, transparent 1px)",
            backgroundSize: "84px 84px",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: "-180px",
            top: "-160px",
            width: "560px",
            height: "560px",
            borderRadius: "50%",
            background: "rgba(73,185,111,0.18)",
            filter: "blur(110px)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: "70px",
            bottom: "118px",
            width: "760px",
            height: "6px",
            background: "#49b96f",
            transform: "rotate(-11deg)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
              <div
                style={{
                  width: "74px",
                  height: "74px",
                  border: "1px solid rgba(18,16,12,0.16)",
                  background: "#12100c",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img src={logoSrc} width={58} height={58} alt="" />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                }}
              >
                <div
                  style={{
                    fontSize: "24px",
                    fontWeight: 800,
                    letterSpacing: "4px",
                    color: "#12100c",
                  }}
                >
                  QUILLIAM AI
                </div>
                <div
                  style={{
                    fontSize: "14px",
                    letterSpacing: "3px",
                    color: "rgba(18,16,12,0.58)",
                    textTransform: "uppercase",
                  }}
                >
                  Workflows / Agents / Handoff
                </div>
              </div>
            </div>
            <div
              style={{
                border: "1px solid rgba(18,16,12,0.18)",
                background: "#fff",
                color: "#177245",
                padding: "12px 16px",
                fontSize: "28px",
                fontWeight: 800,
                fontFamily: "monospace",
              }}
            >
              {"USEFUL AI AT WORK"}
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                maxWidth: "900px",
                fontSize: "78px",
                lineHeight: 0.96,
                letterSpacing: "-3px",
                fontWeight: 800,
                color: "#12100c",
              }}
            >
              We help real businesses use AI at work.
            </div>
            <div
              style={{
                marginTop: "30px",
                maxWidth: "760px",
                fontSize: "27px",
                lineHeight: 1.3,
                color: "rgba(18,16,12,0.68)",
              }}
            >
              Practical AI consulting, workflow builds, and team training for UK businesses.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontFamily: "monospace",
              fontSize: "16px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "rgba(18,16,12,0.56)",
            }}
          >
            <span>Cornwall / UK-wide / Remote</span>
            <span style={{ color: "#177245" }}>quilliam.ai</span>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
