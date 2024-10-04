import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { unstable_setRequestLocale } from "next-intl/server";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  
  title: "Portfolio Agustin Maurel",
  description: "Generated by create next app",
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
    <html className='scroll-smooth' lang="en">
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>

          <Navbar/>
          {children}
          <Footer/>

        </NextIntlClientProvider>
      </body>
    </html>
  );
}
