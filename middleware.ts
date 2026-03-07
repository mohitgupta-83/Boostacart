import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { updateSession } from "@/lib/supabase/middleware"

export async function middleware(request: NextRequest) {
  const response = NextResponse.next()

  if (request.nextUrl.pathname.startsWith("/embed/")) {
    // Remove X-Frame-Options to allow embedding
    response.headers.delete("X-Frame-Options")

    // Set CSP to allow embedding from any domain
    response.headers.set("Content-Security-Policy", "frame-ancestors *")

    // Add CORS headers for cross-origin requests
    response.headers.set("Access-Control-Allow-Origin", "*")
    response.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
    response.headers.set("Access-Control-Allow-Headers", "Content-Type")

    return response
  }

  if (request.nextUrl.pathname.startsWith("/widget/")) {
    return response
  }

  return await updateSession(request)
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/admin/:path*",
    "/auth/:path*",
    "/api/:path*",
    "/protected/:path*",
    "/onboarding/:path*",
    "/embed/:path*",
    "/widget/:path*"
  ],
}
