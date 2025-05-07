import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

// Create the middleware but don't export it as default
const intlMiddleware = createMiddleware(routing);

// Export an empty middleware function instead
export default function middleware() {
  // Do nothing - effectively disabling the internationalization
  return;
}

// Keep the config to prevent Next.js from complaining
export const config = {
  matcher: [],
};
