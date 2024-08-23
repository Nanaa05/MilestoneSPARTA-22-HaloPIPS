import authConfig from "./auth.config";
import NextAuth from "next-auth";
import {
  DEFAULT_LOGIN_REDIRECT,
  apiAuthPrefix,
  authRoutes,
  publicRoutes,
  tpbRoute,
  hmifRoute,
} from "@/routes";
import { auth as auth2 } from "@/auth";

// Use only one of the two middleware options below
// 1. Use middleware directly
// export const { auth: middleware } = NextAuth(authConfig)

// 2. Wrapped middleware option
const { auth } = NextAuth(authConfig);
export default auth(async (req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;
  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);
  const isTpbRoute = tpbRoute.includes(nextUrl.pathname);
  const isHmifRoute = hmifRoute.includes(nextUrl.pathname);
  const session = await auth2();
  const role = session?.user.role;
  console.log("middleware role:", role);
  console.log("middleware isLogged in:", isLoggedIn);

  if (isApiAuthRoute) {
    return;
  }
  if (isPublicRoute) {
    return;
  }
  if (isAuthRoute) {
    if (isLoggedIn) {
      if (role === "HMIF") {
        return Response.redirect(new URL("/dashboard-hmif", nextUrl));
      } else {
        return Response.redirect(new URL("/dashboard-tpb", nextUrl));
      }
    }
    return;
  }
  if (isLoggedIn) {
    if (role === "HMIF") {
      if (isTpbRoute) {
        return Response.redirect(new URL("/dashboard-hmif", nextUrl));
      }
    } else {
      console.log("isHmifRoute:", isHmifRoute);
      if (isHmifRoute) {
        return Response.redirect(new URL("/dashboard-tpb", nextUrl));
      }
    }
  }

  if (!isLoggedIn && !isPublicRoute) {
    return Response.redirect(new URL("/", nextUrl));
  }
  return;
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
