import { NextResponse, type NextRequest } from "next/server";
import { POSTHOG_PROXY_PATH } from "@/lib/posthog-config";

const PUBLIC_FILE = /\/[^/]+\.[^/]+$/;

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isPostHogProxyRequest =
    pathname === POSTHOG_PROXY_PATH ||
    pathname.startsWith(`${POSTHOG_PROXY_PATH}/`);

  if (
    pathname !== "/" &&
    pathname.endsWith("/") &&
    !isPostHogProxyRequest &&
    !pathname.startsWith("/.well-known/") &&
    !PUBLIC_FILE.test(pathname)
  ) {
    const url = new URL(request.url);
    url.pathname = pathname.replace(/\/+$/, "");
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|gif|webp|svg|ico|css|js|txt|xml|webmanifest)$).*)",
  ],
};
