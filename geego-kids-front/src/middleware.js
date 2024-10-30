import createMiddleware from "next-intl/middleware";
import { locales } from "./i18n";

export default createMiddleware({
// List of the whole localizations
  locales: locales,

  // This one is used, when doesnt use any of choosed locals(lang)
  defaultLocale: "fi",
  localeDetection: false
});

export const config = {
  // Only onternational pathes
  matcher: ["/", "/(fi|en|se)/:path*", "/((?!_next|_vercel|.*\\..*).*)"],
};