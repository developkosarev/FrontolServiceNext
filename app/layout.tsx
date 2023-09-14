import './globals.css'
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Footer } from "../components/Footer/Footer";
import { Navbar } from "../components/Navbar/Navbar";
import { Gtm } from "../components/Gtm/Gtm";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Решение проблемы роста базы данных Frontol',
  description: 'Утилита для обслуживания баз данных Frontol, решает проблему роста базы данных',
  keywords: 'Frontol cветка, Frontol рост базы данных, Frontol remaind'
}

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
    <html lang="ru">
      <body className={inter.className}>
        <div className="wrapper">
            <Gtm/>
            <Navbar/>
            <div className="content container-xxl my-md-4 bd-layout">
                <main>{children}</main>
            </div>
            <Footer/>
        </div>
      </body>
    </html>
    )
}
