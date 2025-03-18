"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { getSetting } from "@/redux/selectors";
import settingSlice from "@/redux/slices/settingSlice";
import { useEffect, useState } from "react";

// Lam not sign in
// Nghien cuu, su dung layout de tai sử dụng component
// useEffect lấy và gán dữ liệu từ cookies, local, session vào redux khi vừa truy caapk → đổi hướng
// Tạo nút đăng xuất + xóa toàn bộ dữ liệu cũ
// Thông báo khi người dùng sắp hết hạn cookies
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