'use client'

import React from "react";
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const Navlinks = (): JSX.Element => {
    const pathname = usePathname()

    const items = [
        {href: '/', name: 'О программе'},
        {href: '/download', name: 'Скачать'},
        {href: '/contact', name: 'Контакты'}
    ];

    return (
        <ul className="navbar-nav me-auto">
            {items.map((link) => {
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
