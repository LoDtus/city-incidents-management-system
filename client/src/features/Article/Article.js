"use client";
import { getProps } from "@/redux/selectors";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useTranslations } from "use-intl";
import './style.css'
import GridLayout from './components/GridLayout';
import ListLayout from './components/ListLayout';
import Header from "../shared-ui/Header";

export default function Article() {
    const t = useTranslations();
    const widthNavBar = useSelector((state) => getProps(state).widthNavBar);
    const role = Cookies.get('role');

    // Quan trọng
    // Mới nhất
    // Thịnh hành
    // Hướng dẫn

    return (
        <div className="flex">
            <div style={{minWidth: `${widthNavBar}px`}}></div>
            <div className="px-2 py-2">
                <Header
                    title={"Các bài viết"}
                />
                <div className='flex justify-end'>
                    filter
                </div>

                <div className='w-full flex'>
                    <div className="basis-[12%]">
                        
                    </div>
                    <div className='basis-[76%]'>
                        <GridLayout/>
                        {/* <ListLayout/> */}
                    </div>
                    <div className="basis-[12%]"></div>
                </div>
            </div>
        </div>
    );
};