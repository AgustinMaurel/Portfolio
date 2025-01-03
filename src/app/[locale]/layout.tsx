import type { Metadata } from "next";

import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { unstable_setRequestLocale } from "next-intl/server";


export const metadata: Metadata = {
  
  title: "Portfolio Agustin Maurel",
  description: "Software Developer",
};

export default async function RootLayout({
  children,
  params:{locale}
}: Readonly<{
  children: React.ReactNode;
  params: {locale: string};
  
}>) {

  const messages = await getMessages()

  unstable_setRequestLocale(locale);
  return (
    <html className='scroll-smooth' lang={locale}>
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </head>
      <body
        className={`flex justify-center items-center bg-black text-white`}
      >
        <NextIntlClientProvider messages={messages}>

          
          {children}
          

        </NextIntlClientProvider>
      </body>
    </html>
  );
}
