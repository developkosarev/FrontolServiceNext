import React from "react";
import { Metadata } from "next";
import { Htag } from "@/components/Htag/Htag";
import MapboxAutofill from "@/components/MapboxAutofill/MapboxAutofill";

export const metadata: Metadata = {
    title: 'mapbox',
    description: 'mapbox',
    keywords: 'mapbox autofill'
}

export default function Page() {
    return (
        <div className="container">
            <Htag tag='h1'>Autofill checkout demo (React)</Htag>
            <MapboxAutofill/>
        </div>
    )
}
