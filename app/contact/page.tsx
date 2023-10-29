import React from "react";
import {Metadata} from "next";
import { Htag } from "../../components/Htag/Htag";

export const metadata: Metadata = {
    title: 'Контакты',
    description: 'Контакты',
    keywords: 'Frontol cветка, Frontol рост базы данных, Frontol remaind'
}

export default function Page() {
    return (
        <div className="container">
            <Htag tag='h1'>Контакты</Htag>
            <p className="text-center">
                Вы можете написать нам <a href="mailto:frontolservice@yandex.ru">frontolservice@yandex.ru</a>
            </p>
        </div>
    )
}
