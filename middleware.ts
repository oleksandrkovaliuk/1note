import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

import { NextResponse, type NextRequest } from "next/server";

const isPublicRoutes = createRouteMatcher([
  "/sso",
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/legal(.*)?",
]);

export default clerkMiddleware(async (auth, req: NextRequest) => {
  const { userId, redirectToSignIn } = await auth();

  if (!userId && !isPublicRoutes(req)) {
    return redirectToSignIn();
  }

  if (userId && req.nextUrl.pathname === "/sso") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (userId && isPublicRoutes(req)) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
