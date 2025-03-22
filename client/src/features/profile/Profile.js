"use client";
import './style.css';
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { getProps } from "@/redux/selectors";
import { useSelector } from "react-redux";
import Header from "../shared-ui/Header";
import temp from '@/lib/configs/temp.json';
import { Image } from "antd";
import { useEffect, useState } from "react";

export default function Profile() {
    const widthNavBar = useSelector((state) => getProps(state).widthNavBar);
    const [ avatar, setAvatar ] = useState();

    const status = "Online";
    const email = "tranthanhha@gmail.com";
    const fullName = "Tran Thanh Ha";
    const workPlace = "Thang Long University";
    const bio = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, dolor? Facilis, ipsam obcaecati odio corporis placeat voluptate tempore quas molestias laborum nam aliquam incidunt possimus nisi. Beatae expedita perspiciatis ducimus!";

    useEffect(() => {
        setAvatar(temp.profileImg);
    }, []);

    return (
        <div className="flex">
            <div style={{minWidth: `${widthNavBar}px`}}></div>
            <div className="w-full min-h-[100vh] bg-light-blue p-2">
                <div className="flex w-full h-[300px] p-3 bg-white border border-gray-border rounded-2xl shadow-md">
                    <div className="relative h-full aspect-square rounded-2xl bg-yellow">
                        <div className='absolute right-0 w-fit px-3 py-1 flex items-center bg-white rounded-es-xl'>
                            <span className='mr-1 font-semibold'>{status}</span>
                            <FontAwesomeIcon className='text-green w-[10px]' icon={faCircle} />
                        </div>
                        <span className='profile-status-corner-1 absolute w-[20px] aspect-square rounded-full top-0 right-[85.5px]'></span>
                        <span className='profile-status-corner-2 absolute w-[20px] aspect-square rounded-full top-[32px] right-0'></span>
                    </div>
                    <div className="w-full ml-3 flex flex-col items-center">
                        <input className="hidden" type="radio" name="profile-tab" id="profile-tab-overview" />
                        <input className="hidden" type="radio" name="profile-tab" id="profile-tab-details" />
                        <input className="hidden" type="radio" name="profile-tab" id="profile-tab-contacts" />
                        <ul className="flex">
                            <label htmlFor="profile-tab-overview"
                                className="flex justify-center items-center w-[150px] py-1 px-8 mx-1 rounded-full border
                                duration-200 hover:cursor-pointer active:scale-90"
                            >
                                Overview
                                {/* Tổng quan */}
                            </label>
                            <label htmlFor="profile-tab-details"
                                className="flex justify-center items-center w-[150px] py-1 px-8 mx-1 rounded-full border
                                duration-200 hover:cursor-pointer active:scale-90"
                            >
                                Details
                                {/* Chi tiết */}
                            </label>
                            <label htmlFor="profile-tab-contacts"
                                className="flex justify-center items-center w-[150px] py-1 px-8 mx-1 rounded-full border
                                duration-200 hover:cursor-pointer active:scale-90"
                            >
                                Contacts
                                {/* Liên hệ */}
                            </label>
                        </ul>
                        <div className="w-full h-full border">
                            <p>{email}</p>
                            <p className="font-bold text-[40px]">{fullName}</p>
                            <p>{workPlace}</p>
                            <p>{bio}</p>
                        </div>
                    </div>
                </div>
                <div className="h-full flex">
                    <div className="basis-[20%] h-full mt-2 bg-white border border-gray-border rounded-2xl shadow-md flex justify-center items-center">
                        Filter + Sign Out
                    </div>
                    <div className="basis-[60%] h-full mt-2 bg-white border border-gray-border rounded-2xl shadow-md mx-2 flex justify-center items-center">
                        Tweet
                    </div>
                    <div className="basis-[20%] h-full mt-2 bg-white border border-gray-border rounded-2xl shadow-md flex justify-center items-center">
                        Friends
                    </div>
                </div>
            </div>
        </div>
    );
};