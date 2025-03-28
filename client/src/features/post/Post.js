"use client";
import './style.css';
import { getProps } from "@/redux/selectors";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useTranslations } from "use-intl";
import Header from "../shared-ui/Header";
import GuidelineLayout from "./components/GuidelineLayout";
import TopPosts from './components/TopPosts';
import GuidelineEditor from './components/GuidelineEditor';
import GuidelineDetails from './components/GuidelineDetails';

export default function Post() {
    const t = useTranslations();
    const widthNavBar = useSelector((state) => getProps(state).widthNavBar);
    const role = Cookies.get('role');

    // Quan trọng
    // Mới nhất
    // Thịnh hành
    // Hướng dẫn

    return (
        <div className="flex bg-white-background w-full h-full">
            <div style={{minWidth: `${widthNavBar}px`}}></div>
            <div className="w-full px-2 py-2">
                <Header
                    title={"Các bài viết"}
                />
                <div className='flex justify-end'>
                    filter
                </div>

                {/* <GuidelineEditor/> */}
                {/* <GuidelineLayout/> */}
                <GuidelineDetails/>
            </div>
        </div>
    );
};