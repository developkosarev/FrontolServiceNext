import React from "react";
import {Metadata} from "next";
import { Htag } from "@/components/Htag/Htag";
import { getDictionary } from '@/dictionaries/dictionaries';
import { Locale } from '@/i18n-config';

export const metadata: Metadata = {
    title: 'Info',
    description: 'Info',
    keywords: 'Info'
}

export default async function Page(props: {
    params: Promise<{ lang: Locale }>;
  }) {
    const { lang } = await props.params;
    const dict = await getDictionary(lang);
    
    return (
        <div className="container">
            <Htag tag='h1'>{dict.pages.info}</Htag>
            <p>192.168.0.77</p>
            <ul>
                <li>Frontol next: <a href="http://frontol.dk-dev.space/" target="_blank">http://frontol.dk-dev.space/</a></li>
                <li>Nest: <a href="http://nest.dk-dev.space/" target="_blank">http://nest.dk-dev.space/</a></li>
                <li>{ lang }</li>
            </ul>
        </div>
    )
}
