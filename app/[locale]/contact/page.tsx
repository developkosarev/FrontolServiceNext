import React from "react";
import { Metadata } from "next";
import { Htag } from "@/components/Htag/Htag";

export const metadata: Metadata = {
    title: 'Контакты',
    description: 'Контакты',
    keywords: 'Frontol cветка, Frontol рост базы данных, Frontol remaind'
}

export default async function Contact(props: { params: Promise<{ locale: string }> }) {
    const { locale } = await props.params;

    return (
        <div className="container">
            <Htag tag='h1'>Контакты</Htag>
            <p className="text-center">
                Вы можете написать нам <a href="mailto:frontolservice@yandex.ru">frontolservice@yandex.ru</a>
            </p>
        </div>
    )
}
