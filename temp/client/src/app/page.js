"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { getSetting } from "@/redux/selectors";
import settingSlice from "@/redux/slices/settingSlice";
import { useEffect, useState } from "react";

// Thiết lập đăng nhập, đăng ký
// Test giao diện với các quyền khác nhau
export default function GuestLayout() {
    const t = useTranslations();
    const dispatch = useDispatch();
    const language = useSelector((state) => getSetting(state).language);

    useEffect(() => {
        if (typeof window != "undefined") {
            // lay du lieu coookies, localStorage, session
        }
    }, []);

    return (
        <div>
            <Link href="/access/signIn" prefetch={true}
                className="border"
            >
                Đăng nhập
            </Link>
            
            <button
                className="border"
                onClick={() => dispatch(settingSlice.actions.setLanguage(language == "vi" ? "en" : "vi"))}
            >
                {language === "vi" ? "en" : "vi"}
            </button>
            <div>{t("access.signIn")}</div>
        </div>
    );
};