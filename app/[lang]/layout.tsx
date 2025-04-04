import '../globals.scss'
import React from "react";
import type { Metadata } from 'next'
import { i18n, type Locale } from "@/i18n-config";
import { Inter } from 'next/font/google'
import { Footer } from "@/components/Footer/Footer";
import { Navbar } from "@/components/Navbar/Navbar";
import { Gtm } from "@/components/Gtm/Gtm";
import { CookieConsent } from "@/components/CookieConsent/CookieConsent";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Решение проблемы роста базы данных Frontol',
  description: 'Утилита для обслуживания баз данных Frontol, решает проблему роста базы данных',
  keywords: 'Frontol cветка, Фронтол тормозит поиск, Frontol рост базы данных, Frontol remaind'
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout( props: {
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}) {
  const params = await props.params;
  const { children } = props;

  return (
  <html lang={params.lang}>
    <body className={inter.className}>
      <div className="wrapper">
          <Gtm/>
          <Navbar/>
          <div className="content container-xxl my-md-4 bd-layout">
              <main>{children}</main>
          </div>
          <Footer/>
      </div>
      <CookieConsent/>
    </body>
  </html>
  )
}
