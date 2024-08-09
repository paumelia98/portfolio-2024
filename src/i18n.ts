import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

// Lista de locales soportados
const locales = ['en', 'es'];

export default getRequestConfig(async ({ locale }: { locale?: string }) => {
  // Validar que el parámetro `locale` es válido
  if (!locale || !locales.includes(locale)) {
    notFound(); // Manejar el caso en que el locale no sea válido
  }

  return {
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
