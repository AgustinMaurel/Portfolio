import createMiddleware from 'next-intl/middleware';
import { locales } from './locales';
 
export default createMiddleware({
    locales: locales,

    defaultLocale:'es'
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(es|en)/:path*']
};