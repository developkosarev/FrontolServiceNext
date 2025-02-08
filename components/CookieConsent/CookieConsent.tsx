'use client'

import React, { useEffect, useState } from "react"
import styles from './CookieConsent.module.css'

const cookieStorage = {
    getItem: (key: string): string => {
        const cookies: any = document.cookie
            .split(';')
            .map(cookie => cookie.split('='))
            .reduce((acc, [key, value]) => ({...acc, [key.trim()] : value}), {});

        return cookies[key];
    },
    setItem: (key: string, value: boolean) => {
        document.cookie = `${key}=${value};expires=Sun, 10 Jul 2030 06:23:41 GMT`;
    }
};

const storageType = cookieStorage;
const consentPropertyType = 'site_consent';

const hasConsented = () => storageType.getItem(consentPropertyType) === "true";
const toggleStorage = (prop: boolean) => storageType.setItem(consentPropertyType, prop);

const updateConsent = () => {
    const win: any = window;
    const dataLayer = win.dataLayer;

    dataLayer.push("consent", "update", {
        ad_storage: "granted",
        analytics_storage: "granted",
        facebook: "granted"
    });
}

export const CookieConsent = (): React.ReactElement => {
    const [isShowed, setIsShowed] = useState(false)
    useEffect(() => {
        if (hasConsented()) {
            updateConsent();
        } else {
            setIsShowed(true)
        }
    }, [])

    const handleClick = () => {
        toggleStorage(true)
        updateConsent()
        setIsShowed(false)
    }

    if (!isShowed) return <></>

    return (
        <div className={`${styles.cookieConsent} ${styles.popupActive} bg-light`}>
            Чтобы предоставить вам лучший сервис, мы используем файлы cookie.
            <button className={styles.cookieButton + " btn btn-info ml-2 bg-light"}
                    onClick={handleClick}
            >
                Принять
            </button>
        </div>
    )
}
