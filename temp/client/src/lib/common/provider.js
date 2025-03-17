"use client";
import enMessages from "@/lib/configs/languages/en.json";
import viMessages from "@/lib/configs/languages/vi.json";
import store from "@/redux/store";
import { Provider, useDispatch, useSelector } from "react-redux";
import { NextIntlClientProvider } from "next-intl";
import { getSetting } from "@/redux/selectors";
import { useState, useEffect } from "react";
import settingSlice from "@/redux/slices/settingSlice";

function IntlProvider({ children }) {
    const dispatch = useDispatch();
    const language = useSelector((state) => getSetting(state).language);
    const messages = language === "vi" ? viMessages : enMessages;
    const [ mounted, setMounted ] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedLanguage = localStorage.getItem("language");
            if (storedLanguage && storedLanguage !== language) {
                dispatch(settingSlice.actions.setLanguage(storedLanguage));
            }
        }
        setMounted(true);
    }, []);

    useEffect(() => {
        document.documentElement.lang = language;
    }, [language]);

    if (!mounted) return null;

    return (
        <NextIntlClientProvider locale={language} messages={messages}>
            { children }
        </NextIntlClientProvider>
    );
};

export default function AppProvider({ children }) {
    return (
        <Provider store={store}>
            <IntlProvider>
                { children }
            </IntlProvider>
        </Provider>
    );
};