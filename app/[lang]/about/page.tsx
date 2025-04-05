import React from "react";
import { Metadata } from "next";
import { Htag } from "@/components/Htag/Htag";
import { getDictionary } from '@/dictionaries/dictionaries';
import { i18n, type Locale } from '@/i18n-config';

export async function generateStaticParams() {
    return i18n.locales.map((locale) => ({ lang: locale }));
}

export const metadata: Metadata = {
    title: 'О нас',
    description: 'О нас',
    keywords: 'О нас'
}

export default async function Page(props: {
    params: Promise<{ lang: Locale }>;
  }) {
    const { lang } = await props.params;
    const dict = await getDictionary(lang);

    return (
        <div className="container">
            <Htag tag='h1'>О нас</Htag>
            <p className="text-center">О нас</p>
        </div>
    )
}
