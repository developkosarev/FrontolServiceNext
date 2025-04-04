import React from "react";
import Image from 'next/image'
import type { Metadata } from 'next'
import { Htag } from "@/components/Htag/Htag";
import { getDictionary } from '@/dictionaries/dictionaries';
import { Locale } from '@/i18n-config';

export async function generateStaticParams() {
    return [{ lang: 'ru' }, { lang: 'en' }]
}

export const metadata: Metadata = {
    title: 'Скачать FrontolServiceAddon',
    description: 'Скачать утилиту FrontolServiceAddon',
    keywords: 'Скачать FrontolServiceAddon, Frontol cветка, Frontol рост базы данных, Frontol remaind'
}

export default async function Page(props: {
    params: Promise<{ lang: Locale }>;
  }) {
    const { lang } = await props.params;
    const dict = await getDictionary(lang);

    return (
        <div className="container">
            <Htag tag='h1'>Скачать Frontol Service Add-on</Htag>
            <div className="btn-download">
                <a href="/FrontolServiceAddon/FrontolServiceAddon.zip" className="btn btn-primary btn-lg" role="button">
                    Скачать
                </a>
            </div>
            <p>
                Распакуйте zip файл в любой каталог по вашему усмотрению например c:\FrontolServiceAddon
                Запустите файл FrontolServiceAddon.exe.
            </p>
            <Image className="img-fluid rounded mx-auto d-block mb-3"
                   src="/img/Folder.jpg" width={500} height={500} priority
                   alt="Папка с файлами"/>
            <p>Перейдите в меню настройки задайте подключение в базе данных фронтол.</p>

            <Image className="img-fluid rounded mx-auto d-block mb-3"
                   src="/img/ProfileForms.jpg" width={347} height={397} sizes="100vw"
                   alt="Настроки"/>
            <p>Настройте задачи. Измените сверки свертки если вам это неободимо по умолчанию каждые 6 часов.</p>

            <Image className="img-fluid rounded mx-auto d-block mb-3"
                   src="/img/Tasks.jpg" width={347} height={397} sizes="100vw"
                   alt="Задачи"/>

            <p>
                Если существует необходимость получать справочник товаров, остатки, цены и минимальные цены,
                можно настроить подключение к FTP серверу для отправки текстового файла.
                Эта функция аналогична выгрузке справочника из Штрих-М Кассир
                <a href="https://kkm.solutions/wiki/doku.php?id=%D0%BA%D0%B0%D1%81%D1%81%D0%B8%D1%805:%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%82%D0%BE%D0%B1%D0%BC%D0%B5%D0%BD%D0%B0%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D0%BC%D0%B8:%D0%B7%D0%B0%D0%BF%D1%80%D0%BE%D1%81%D1%80%D0%B5%D0%BA%D0%B2%D0%B8%D0%B7%D0%B8%D1%82%D0%BE%D0%B2">
                    Запрос реквизитов</a>
            </p>

            <Image className="img-fluid rounded mx-auto d-block mb-3"
                   src="/img/Ftp.jpg" width={347} height={397} sizes="100vw"
                   alt="Настроки ftp"/>

            <p>
                Далее можно запустить, остановить свертку остатков вручную Операции Запустить Остановить.
            </p>

            <Image className="img-fluid rounded mx-auto d-block mb-3"
                   src="/img/Operation.jpg" width={332} height={144} sizes="100vw"
                   alt="Операции запусить, остановить"/>

            <p>
                Или дождаться запуска по таймеру.
                Свертка и выгрузка данных по умолчанию выполняется каждые 6 часов.
                Утилиту можно закрыть она свернется в Tray (при нажатии на крестик происходит свертка в Tray).
                Что бы закрыть утилиту зайдите в меню файл Выход.
            </p>

            <p>
                Надеюсь эта утилита поможет избежать роста базы данных, и вам не придется регулярно удалять данные
                из <strong>Remaind</strong>
            </p>

            <p>
                Утилиту необходимо установить в автозагрузку Frontol
            </p>

            <Image className="img-fluid rounded mx-auto d-block mb-3"
                   src="/img/AutoStart.jpg" width={952} height={513} sizes="100vw"
                   alt="Автозагрузка"/>
        </div>
    )
}
