import createMiddleware from "next-intl/middleware";
import {routing} from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Match all pathnames except for
  // - API routes
  // - _next (Next.js internals)
  // - static files (images, fonts, etc.)
  // - files with dots (e.g. favicon.ico)
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
};