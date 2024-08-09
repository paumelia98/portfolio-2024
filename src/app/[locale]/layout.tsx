import type { Metadata } from "next";
import "@/app/globals.css";
import CustomCursor from "@/app/components/CustomCursor";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

export const metadata: Metadata = {
  title: "Portfolio Pau Melià 2024",
  description: "Portfolio de Frontend Developer.",
};

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params; 

  const messages = await getMessages(locale); 

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <CustomCursor />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
