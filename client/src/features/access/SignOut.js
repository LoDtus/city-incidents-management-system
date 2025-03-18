"use client";

import { useTranslations } from "next-intl";
import { useRouter } from 'next/navigation';
import { useDispatch } from "react-redux";
import { Button } from 'antd';
import { useEffect, useState } from "react";
import Cookies from 'js-cookie';

export default function SignOut() {
    const t = useTranslations();
    const dispatch = useDispatch();
    const router = useRouter();
    const [ signOut, setSignOut ] = useState(false);

    useEffect(() => {
        if (!signOut) return;

        if (typeof window !== 'undefined') {
            dispatch({ type: 'RESET '});
            sessionStorage.clear();
            localStorage.clear();

            const allCookies = Cookies.get();
            Object.keys(allCookies).forEach(cookieName => {
                Cookies.remove(cookieName);
            });
        }
        router.push('/');
    }, [signOut]);

    return (
        <Button
            color="danger"
            variant="solid"
            onClick={() => setSignOut(true)}
        >
            <p className="font-semibold">{t("access.signOut")}</p>
        </Button>
    );
};