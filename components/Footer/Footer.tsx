'use client'

import React, { useEffect } from "react"
import variables from '@/app/variables.module.scss'
import styles from './Footer.module.scss'
import LanguageChanger from "@/components/LanguageChanger";

export const Footer = (): React.ReactElement => {
    useEffect(() => {
        // @ts-ignore
        //import('bootstrap/dist/js/bootstrap');
        //import('bootstrap/js/dist/base-component');
        //import('bootstrap/js/dist/button');
        import('bootstrap/js/dist/collapse');
        //import('bootstrap/js/dist/dropdown');
    }, []);

    return (
        <footer className={`${styles.pageFooter} font-small`} style={{ color: variables.footerBackgroundColor }}>
            <div className="footer-copyright text-dark text-center pt-2">© 2023 Copyright:</div>
            <LanguageChanger/>
        </footer>
    );
}
