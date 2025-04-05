import i18nConfig from '@/i18nConfig';
import './../globals.scss'
import type { Metadata } from 'next';
import React, { ReactNode } from 'react';
import { dir } from 'i18next';
import { notFound } from 'next/navigation';

import { Inter } from 'next/font/google'
import { Footer } from "@/components/Footer/Footer";
import { Navbar } from "@/components/Navbar/Navbar";
import { Gtm } from "@/components/Gtm/Gtm";
import { CookieConsent } from "@/components/CookieConsent/CookieConsent";
import initTranslations from "@/app/i18n";
import TranslationsProvider from '@/components/TranslationsProvider';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Решение проблемы роста базы данных Frontol',
  description: 'Утилита для обслуживания баз данных Frontol, решает проблему роста базы данных',
  keywords: 'Frontol cветка, Фронтол тормозит поиск, Frontol рост базы данных, Frontol remaind'
}

export function generateStaticParams() {
  return i18nConfig.locales.map(locale => ({ locale }));
}

const i18nNamespaces = ['home'];

export default async function RootLayout(props: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  const { children } = props;

  if (!i18nConfig.locales.includes(locale)) {
    notFound();
  }

  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
      <html lang={locale} dir={dir(locale)}>
      <body className={inter.className}>
      <TranslationsProvider
          namespaces={i18nNamespaces}
          locale={locale}
          resources={resources}>
          <div className="wrapper">
            <Gtm/>
            <Navbar/>
            <div className="content container-xxl my-md-4 bd-layout">
              <main>{children}</main>
            </div>
            <Footer/>
          </div>
          <CookieConsent/>
      </TranslationsProvider>
      </body>
      </html>
  );
}