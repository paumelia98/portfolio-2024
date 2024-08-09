import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // Lista de todos los locales que son soportados
  locales: ['en', 'es'],

  // Usado cuando ningún locale coincide
  defaultLocale: 'en',
});

export const config = {
  // Coincidir solo con rutas internacionalizadas
  matcher: ['/', '/(es|en)/:path*'],
};
