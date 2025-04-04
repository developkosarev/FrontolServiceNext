import Image from 'next/image'
import styles from '@/page.module.css'
import React from "react";
import { getDictionary } from '@/dictionaries/dictionaries';
import { Locale } from '@/i18n-config';

export async function generateStaticParams() {
  return [{ lang: 'ru' }, { lang: 'en' }]
}

export default async function Home(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await props.params;
  const dict = await getDictionary(lang);

  return (
    <div className="container">
      <h1>Причины роста базы данных Frontol</h1>
      <p>
        Если у вас большой справочник товаров, вы можете столкнуться с ростом базы данных Frontol.
        Проблема возникает из за роста таблицы <strong>Remaind</strong>.
        При каждой новой загрузке остатков из товароучетной системы возникают новые записи в таблице,
        к сожалению старые записи удаляются не всегда.
      </p>

      <h2>Используйте стандартные настроки Frontol</h2>

      <Image className="img-fluid rounded mx-auto d-block mb-3"
             src="/img/SystemDb.jpg" width={946} height={501} priority
             alt="Настроки свертки остатков"/>

      <p>
        Возможно вам следует воспользоваться стандартными настройками фронтол.
        Установите галочки свертка <strong>счетчиков</strong> и свертка <strong>остатков</strong>
        Если ваш справочник товара не большой вам должно помочь.
      </p>

      <h2>Не помогает?</h2>
      <p>
        Попробуем понять почему это происходит.
        За свертку остатков во frontol отвечает stored procedure <strong>Remaind_collapse</strong>.
        В этой процедуре происходит чтение остатков из таблицы <strong>Remaind</strong>.
        Добавление новых записей с остатками и удаление всех старых записей.
        Если у вас число записей достаточно большое мы получаем
        <a href="https://www.ibase.ru/45-ways-to-improve-firebird-performance-russian/"> длинную пишущую транзакцию</a>.
        Для слабых кассовых компьютеров это не сработает и данных их таблицы не удалятся.
        В дальнейшем это вызовет рост размера базы данных, медленное открывание окна поиска товара
        ну и самой главное увеличение частоты <strong>повреждений</strong> базы данных.
      </p>
      <h2>Решение</h2>
      <p>
        Очевидно необходимо сократить количество изменяемых элементов за одну транзакцию.
        Разделить свертку на пакеты например по 10 элементов.
        Таким образом мы избавимся от длинной транзации.

        Читаем например первые 10 записей, более 4 копий. Удаляем и записываем повторно
      </p>
      <p>
        <code>
          SELECT FIRST 10 REMAINID, SUM(IIF(DTYPE = 0, DELTA, 0))AS SUMMA0, SUM(IIF(DTYPE = 1, DELTA, 0)) AS SUMMA1 <br/>
          FROM REMAIND RD <br/>
          GROUP BY REMAINID <br/>
          HAVING COUNT(ID) &gt; 4
        </code>
      </p>
      <p><code>DELETE FROM REMAIND <br/> WHERE REMAINID=:RemainId</code></p>
      <p>
        <code>
            INSERT INTO REMAIND(ID, REMAINID, DELTA, CHNG, DTYPE) <br/>
            VALUES (GEN_ID(GREMAIND, 1), :RemainId, :Summa0, -1, 0)
        </code>
      </p>
      <p>
        <code>
            INSERT INTO REMAIND(ID, REMAINID, DELTA, CHNG, DTYPE) <br/>
            VALUES (GEN_ID(GREMAIND, 1), :RemainId, :Summa1, -1, 1)
        </code>
      </p>
      <h2>Реализация</h2>
      <p>
        Написана утилита которая запускается при открытии Frontol.
        Утилита сворачивается в Trey так чтобы кассир не смог закрыть ее случайно.
        Она запускает процедуру свертки остатков в течении рабочего дня, не мешая при этом кассиру.
        Также утилита позволяет выгружать справочник товаров, продажные цены, минимально допустимые цены, остатки.
        Эту информацию мы используем как обратную связь в товароучетной системе.
        То есть мы знаем какая информация содержится в базе данных каждой кассы и выгружаем только измененные данные.
        Это сокращает разрастание таблицы <strong>Remaind</strong>.
      </p>

      <div className="btn-download">
        <a href="download" className="btn btn-primary btn-lg" role="button">
          Скачать
        </a>
      </div>

      <h2>Вывод.</h2>
      <p>
        На форуме frontol существую темы с этой проблемой но к сожалению решения от разработчиков пока нет.
        Видимо проблема не совсем актуальна.
      </p>
    </div>
  )
}
