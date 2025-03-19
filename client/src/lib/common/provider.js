"use client";
import enMessages from "@/lib/configs/languages/en.json";
import viMessages from "@/lib/configs/languages/vi.json";
import store from "@/redux/store";
import { Provider, useDispatch, useSelector } from "react-redux";
import { NextIntlClientProvider } from "next-intl";
import { getSetting } from "@/redux/selectors";
import { useState, useEffect } from "react";
import settingSlice from "@/redux/slices/settingSlice";
import SignIn from "@/features/access/SignIn";
import SignUp from "@/features/access/SignUp";
import AccessWallpaper from "@/features/shared-ui/AccessWallpaper";
import NavigationBar from "@/features/navigation-bar/NavigationBar";
import { usePathname } from "next/navigation";
import ForgotPassword from "@/features/access/ForgotPassword";
import { motion, AnimatePresence } from "framer-motion";

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
    const path = usePathname();

    return (
        <Provider store={store}>
            <IntlProvider>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={path}
                        initial={{ filter: "blur(3px)", opacity: 0.8 }}
                        animate={{ filter: "blur(0px)", opacity: 1 }}
                        exit={{ filter: "blur(3px)", opacity: 0.8 }}
                        transition={{ duration: 0.2 }}
                    >
                        { path.includes("/access/") && <AccessWallpaper/> }
                        { path === "/access/sign-in" && <SignIn/> }
                        { path === "/access/sign-up" && <SignUp/> }
                        { path === "/access/forgot-password" && <ForgotPassword/> }
                    </motion.div>
                    <div className="z-[-1] w-[100vw] h-[100vh] bg-black fixed top-0 left-0"></div>
                </AnimatePresence>

                <NavigationBar/>
                { children }
            </IntlProvider>
        </Provider>
    );
};