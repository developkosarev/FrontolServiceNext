'use client'

import React from "react";
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LinkItem } from "./LinkItem";

const LINKS: Array<LinkItem> = [
    new LinkItem('/', 'О программе'),
    new LinkItem('/download', 'Скачать'),
    new LinkItem('/overview', 'Описание'),
    new LinkItem('/contact', 'Контакты')
];

export const Navlinks = (): JSX.Element => {
    const pathname = usePathname()

    return (
        <ul className="navbar-nav me-auto">
            {LINKS.map((link) => {
                const isActive = pathname === link.href
                const activeClass = isActive ? 'active' : ''

                return (
                    <li className="nav-item" key={link.name}>
                        <Link
                            className={`${activeClass} nav-link`}
                            href={link.href}
                        >
                            {link.name}
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}
