import React from "react";
import {Metadata} from "next";
import { Htag } from "@/components/Htag/Htag";

export const metadata: Metadata = {
    title: 'О нас',
    description: 'О нас',
    keywords: 'О нас'
}

export default function Page() {
    return (
        <div className="container">
            <Htag tag='h1'>О нас</Htag>
            <p className="text-center">О нас</p>
        </div>
    )
}
