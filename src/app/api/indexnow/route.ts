import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/content";

const INDEXNOW_KEY = "3d99157dbd521de3c44fefb4153555d6";

/**
 * POST /api/indexnow
 * Body: { urls: string[] }
 *
 * Submits URLs to IndexNow for instant indexing by Bing, Yandex, and other
 * participating search engines. Call after deploying content changes.
 *
 * Requires INDEXNOW_SECRET env var to match the Authorization header.
 */
export async function POST(request: Request) {
  const secret = process.env.INDEXNOW_SECRET;
  if (!secret) {
    return NextResponse.json(
      { error: "INDEXNOW_SECRET not configured" },
      { status: 500 }
    );
  }

  const auth = request.headers.get("authorization");
  if (auth !== `Bearer ${secret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = (await request.json()) as { urls?: string[] };
  const urls = body.urls;

  if (!Array.isArray(urls) || urls.length === 0) {
    return NextResponse.json(
      { error: "Provide a non-empty urls array" },
      { status: 400 }
    );
  }

  const payload = {
    host: new URL(siteConfig.url).host,
    key: INDEXNOW_KEY,
    keyLocation: `${siteConfig.url}/${INDEXNOW_KEY}.txt`,
    urlList: urls.map((u) =>
      u.startsWith("/") ? `${siteConfig.url}${u}` : u
    ),
  };

  const result = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(payload),
  });

  return NextResponse.json(
    {
      submitted: payload.urlList.length,
      status: result.status,
      ok: result.ok,
    },
    { status: result.ok ? 200 : 502 }
  );
}
