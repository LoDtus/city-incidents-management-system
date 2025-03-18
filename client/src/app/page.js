"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { getSetting } from "@/redux/selectors";
import settingSlice from "@/redux/slices/settingSlice";
import { useEffect, useState } from "react";
import userSlice from "@/redux/slices/userSlice";
import Cookies from "js-cookie";
import useRedirectByRole from "@/lib/hooks/useRedirectByRole";

// Nghien cuu, su dung layout de tai sử dụng component
// Thông báo khi người dùng sắp hết hạn cookies
export default function Home() {
    const t = useTranslations();
    const dispatch = useDispatch();
    const language = useSelector((state) => getSetting(state).language);
    const redirectByRole = useRedirectByRole();

    useEffect(() => {
        // const token = Cookies.get('token');
        const auth = JSON.parse(sessionStorage.getItem('auth')) || JSON.parse(localStorage.getItem('auth'));
        const role = Cookies.get('role');
        console.log(1);
        
        if (!auth || !role) return redirectByRole(null);

        const userData = {
            "id": auth.id,
            "email": auth.email,
            "password": auth.password,
            "active": auth.active,
            "role": auth.role,
        }
        dispatch(userSlice.actions.setUser(userData));
        redirectByRole(auth.role);
    }, []);

    return (
        <div className="app">
            {/* <Link href="/access/signIn" prefetch={true} className="border">Đăng nhập</Link>
            <button className="border" onClick={() => dispatch(settingSlice.actions.setLanguage(language == "vi" ? "en" : "vi"))}>{language === "vi" ? "en" : "vi"}</button> */}
        </div>
    );
};