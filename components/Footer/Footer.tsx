'use client'

import React, {useEffect} from "react";

export const Footer = (): JSX.Element => {
    useEffect(() => {
        // @ts-ignore
        import('bootstrap/dist/js/bootstrap');
    }, []);

    return (
        <footer className="page-footer font-small">
            <div className="footer-copyright text-dark text-center pt-2">© 2023 Copyright:</div>
        </footer>
    );
}
