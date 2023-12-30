import React from "react";
import { Htag } from "@/components/Htag/Htag";
import dynamic from 'next/dynamic'

const MapboxAutofill = dynamic(() => import('@/components/MapboxAutofill/MapboxAutofill'), {
  ssr: false,
})

export default function Page() {
    return (
        <div className="container">
            <Htag tag='h1'>Autofill checkout demo (React)</Htag>
            <MapboxAutofill/>
        </div>
    )
}
