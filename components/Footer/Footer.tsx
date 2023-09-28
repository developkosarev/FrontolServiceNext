'use client'

import React, {useEffect} from "react"
import variables from '@/app/variables.module.scss'
import styles from './Footer.module.scss'

export const Footer = (): JSX.Element => {
    useEffect(() => {
        // @ts-ignore
        import('bootstrap/dist/js/bootstrap');
    }, []);

    return (
        <footer className={`${styles.pageFooter} font-small`} style={{ color: variables.footerBackgroundColor }}>
            <div className="footer-copyright text-dark text-center pt-2">© 2023 Copyright:</div>
        </footer>
    );
}
