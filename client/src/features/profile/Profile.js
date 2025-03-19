"use client";

import { getProps } from "@/redux/selectors";
import { useSelector } from "react-redux";
import Header from "../shared-ui/Header";
import temp from '@/lib/configs/temp.json';
import { Image } from "antd";
import { useEffect, useState } from "react";

export default function Profile() {
    const widthNavBar = useSelector((state) => getProps(state).widthNavBar);
    const [ avatar, setAvatar ] = useState();
    const fullName = "Tran Thanh Ha";

    useEffect(() => {
        setAvatar(temp.profileImg);
    }, []);

    return (
        <div className="flex">
            <div style={{minWidth: `${widthNavBar}px`}}></div>
            <div className="w-full h-[100vh] bg-white">
                <div className="relative">
                    <div className="w-full h-[300px] overflow-hidden">
                        <Image
                            src="https://i.pinimg.com/1200x/9f/5d/62/9f5d6243f740afb5e7fad88a2a4b6476.jpg"
                            alt="Thumbnail"
                            width="100%"
                        />
                    </div>
                    <div className="w-[200px] aspect-square rounded-full overflow-hidden absolute bottom-[-100px]">
                        <Image
                            src={avatar}
                            alt={fullName}
                        />
                    </div>
                </div>
                <div className="w-full h-full bg-black">

                </div>
            </div>
        </div>
    );
};