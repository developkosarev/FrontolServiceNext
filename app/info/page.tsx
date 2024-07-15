import React from "react";
import {Metadata} from "next";
import { Htag } from "@/components/Htag/Htag";

export const metadata: Metadata = {
    title: 'Info',
    description: 'Info',
    keywords: 'Info'
}

export default function Page() {
    return (
        <div className="container">
            <Htag tag='h1'>Info</Htag>
            <p>192.168.0.77</p>
            <ul>
                <li>Frontol next: <a href="http://frontol.dk-dev.space/">http://frontol.dk-dev.space/</a></li>
                <li>Nest: <a href="http://nest.dk-dev.space/">http://nest.dk-dev.space/</a></li>
            </ul>
        </div>
    )
}
