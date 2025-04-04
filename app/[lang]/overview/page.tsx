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
    title: 'Описание FrontolServiceAddon',
    description: 'Frontol Описание как увеличить размер базы данных',
    keywords: 'Frontol как воспроизвести переполнение таблицы'
}

export default async function Page(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await props.params;
  const dict = await getDictionary(lang);

    return (
        <div className="container">
          <Htag tag='h1'>Как воспроизвести проблему</Htag>

          <p>
            Давайте предположим, что Frontol работает какое то время с настройками по умолчанию.
            Ежедневно происходим выгрузка продуктов из товароучетной системы предположим 1С и все идет хорошо.
          </p>
          <p>
            Мы подготовили небольшой файл с тестовыми данными. Он содержит 5 тыс. продуктов (Product01, Product02 ...)
          </p>
          <div className="btn-download mb-3">
            <a href="/files/sc.zip" className="btn btn-secondary btn-sm" role="button">
              Скачать
            </a>
          </div>
          <p>
            Для того что бы эмулировать работу базы данных в течении несколько месяцев.
            Можно скоприровать файл в каталог обмена и настроить обмен через каталоги.
          </p>
          <Image className="img-fluid rounded mx-auto d-block mb-3"
                 src="/img/ImportExport.jpg" width={500} height={393} priority
                 alt="Настроки обмена"/>

          <Htag tag='h2'>Установите признак только для чтения</Htag>
          <p>
            Создайте пустой файл-флаг для начала обмена и установите признак только для чтения. Это позволит запустить
            бесконечный цикл загрузки справочника.
            Файл флаг не будет удаляться и Frontol будет иницировать загрузку каждые 3 секунды (зависит от ваших
            настроек).
          </p>
          <Image className="img-fluid rounded mx-auto d-block mb-3"
                 src="/img/ReadOnly.jpg" width={500} height={715} priority
                 alt="Настроки обмена"/>

          <Htag tag='h2'>Размер базы данных</Htag>
          <p>
            В нашем случая это заняло около 6 часов. Размер базы данных увеличился до <strong>1Gb</strong>.
            Таблица <strong>Remaind</strong> содержала около 2млн. записей и это уже заметно отразилось на скорости
            работы поиска в справочнике.
            Также заметно увеличивается время загрузки справочника.
          </p>
          <div className="btn-download">
            <a href="/FrontolServiceAddon/FrontolServiceAddon.zip" className="btn btn-primary btn-lg" role="button">
              Скачать
            </a>
          </div>
          <p>
            После этого можно скачать и запустить <strong>FrontolServiceAddon</strong>.
          </p>
        </div>
    )
}
