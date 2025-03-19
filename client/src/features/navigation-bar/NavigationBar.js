"use client";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars,
    faXmark,
    faMapLocationDot,
    faChartSimple,
    faBell,
    faMessage,
    faComments,
    faNewspaper,
    faLocationDot,
    faAddressCard,
    faUser,
    faUsers,
    faGlobe,
    faPrint,
    faBookmark,
    faTrash,
    faGear,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import propertiesSlice from "@/redux/slices/propertiesSlice";
import Link from "next/link";
import { useTranslations } from "use-intl";
import { usePathname, useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { getProfile } from "@/redux/selectors";
import { Typography } from "antd";

import temp from '@/lib/configs/temp.json';
import profileSlice from "@/redux/slices/profileSlice";

const { Text } = Typography;

export default function NavigationBar() {
    const t = useTranslations();
    const dispatch = useDispatch();
    const curPage = usePathname();
    const curRole = Cookies.get('role');

    const elementRef = useRef(null);
    const [ role, setRole ] = useState("user"); // get from cookies
    // const profileImage = useSelector((state) => getProfile(state).profileImg);
    // const fullName = useSelector((state) => getProfile(state).fullName);
    const fullName = "Nguyen Trung";
    const email = "150903@gmail.com"
    const [ avatar, setAvatar ] = useState();

    useEffect(() => {
        if (elementRef.current) {
            const { width, height } = elementRef.current.getBoundingClientRect();
            dispatch(propertiesSlice.actions.setWidth_navBar(width));
        }
        setAvatar(temp.profileImg);
        
        // switch (curRole) {
        //     case "ROLE_ADMIN":
        //         setRole("admin");
        //         break;
        //     case "ROLE_MANAGER":
        //         setRole("manager");
        //         break;
        //     case "ROLE_STAFF":
        //         setRole("staff");
        //         break;
        //     case "ROLE_USER":
        //         setRole("user");
        //         break;
        //     default:
        //         setRole("guest");
        //         break;
        // }
    }, []);

    return (
        <div ref={elementRef} className="navigationBar z-50 fixed max-w-[300px] h-[100vh] p-2 flex flex-col bg-white shadow-xl border-r border-gray-border">
            <input type="checkbox" id="toggleNaviagtion" className="hidden"/>
            <div className="w-full flex">
                <label htmlFor="toggleNaviagtion" title={t("navigation.open")} className="w-fit">
                    <FontAwesomeIcon id="openNavigation"
                        className="w-fit p-2 rounded-md text-gray
                        duration-200 hover:cursor-pointer hover:text-black hover:bg-light-gray active:scale-90" icon={faBars}/>
                </label>
                <label htmlFor="toggleNaviagtion" title={t("navigation.close")} className="w-fit">
                    <FontAwesomeIcon id="closeNavigation"
                        className="w-fit p-2 rounded-md text-gray
                        duration-200 hover:cursor-pointer hover:text-black hover:bg-light-gray active:scale-90" icon={faXmark}/>
                </label>
            </div>

            <ul className="navigationBar h-[100%] overflow-y-auto">
                <Link href={`/${role}/map`} title={t("navigation.map")}
                    className={curPage.includes("/map")
                        ? "item-navigation w-full py-2 px-2 mb-1 rounded-md flex items-center justify-center font-semibold text-blue bg-light-blue duration-200 hover:cursor-pointer"
                        : "item-navigation w-full py-2 px-2 mb-1 rounded-md flex items-center justify-center font-semibold text-gray duration-200 hover:cursor-pointer hover:text-black hover:bg-light-gray active:scale-90"}
                >
                    <FontAwesomeIcon className="iconNavigation w-5 flex justify-center py-1" icon={faMapLocationDot}/>
                    <span>{t("navigation.map")}</span>
                </Link>
                { ["staff", "manager", "admin"].includes(role) &&
                    <Link href={`/${role}/statistic`} title={t("navigation.statistic")}
                        className={curPage.includes("/statistic")
                            ? "item-navigation w-full py-2 px-2 mb-1 rounded-md flex items-center justify-center font-semibold text-blue bg-light-blue duration-200 hover:cursor-pointer"
                            : "item-navigation w-full py-2 px-2 mb-1 rounded-md flex items-center justify-center font-semibold text-gray duration-200 hover:cursor-pointer hover:text-black hover:bg-light-gray active:scale-90"}
                    >
                        <FontAwesomeIcon className="iconNavigation w-5 flex justify-center py-1" icon={faChartSimple}/>
                        <span>{t("navigation.statistic")}</span>
                    </Link>
                }
                { ["user", "staff", "manager", "admin"].includes(role) &&
                    <Link href={`/${role}/notification`} title={t("navigation.notification")}
                        className={curPage.includes("/notification")
                            ? "item-navigation w-full py-2 px-2 mb-1 rounded-md flex items-center justify-center font-semibold text-blue bg-light-blue duration-200 hover:cursor-pointer"
                            : "item-navigation w-full py-2 px-2 mb-1 rounded-md flex items-center justify-center font-semibold text-gray duration-200 hover:cursor-pointer hover:text-black hover:bg-light-gray active:scale-90"}
                    >
                        <FontAwesomeIcon className="iconNavigation w-5 flex justify-center py-1" icon={faBell}/>
                        <span>{t("navigation.notification")}</span>
                    </Link>
                }
                { ["user", "staff", "manager", "admin"].includes(role) &&
                    <Link href={`/${role}/chat`} title={t("navigation.chat")}
                        className={curPage.includes("/chat")
                            ? "item-navigation w-full py-2 px-2 mb-1 rounded-md flex items-center justify-center font-semibold text-blue bg-light-blue duration-200 hover:cursor-pointer"
                            : "item-navigation w-full py-2 px-2 mb-1 rounded-md flex items-center justify-center font-semibold text-gray duration-200 hover:cursor-pointer hover:text-black hover:bg-light-gray active:scale-90"}
                    >
                        <FontAwesomeIcon className="iconNavigation w-5 flex justify-center py-1" icon={faMessage}/>
                        <span>{t("navigation.chat")}</span>
                    </Link>
                }
                { ["manager", "admin"].includes(role) &&
                    <Link href={`/${role}/support`} title={t("navigation.support")}
                        className={curPage.includes("/support")
                            ? "item-navigation w-full py-2 px-2 mb-1 rounded-md flex items-center justify-center font-semibold text-blue bg-light-blue duration-200 hover:cursor-pointer"
                            : "item-navigation w-full py-2 px-2 mb-1 rounded-md flex items-center justify-center font-semibold text-gray duration-200 hover:cursor-pointer hover:text-black hover:bg-light-gray active:scale-90"}
                    >
                        <FontAwesomeIcon className="iconNavigation w-5 flex justify-center py-1" icon={faComments}/>
                        <span>{t("navigation.support")}</span>
                    </Link>
                }
                <Link href={`/${role}/article`} title={t("navigation.article")}
                    className={curPage.includes("/article")
                        ? "item-navigation w-full py-2 px-2 mb-1 rounded-md flex items-center justify-center font-semibold text-blue bg-light-blue duration-200 hover:cursor-pointer"
                        : "item-navigation w-full py-2 px-2 mb-1 rounded-md flex items-center justify-center font-semibold text-gray duration-200 hover:cursor-pointer hover:text-black hover:bg-light-gray active:scale-90"}
                >
                    <FontAwesomeIcon className="iconNavigation w-5 flex justify-center py-1" icon={faNewspaper}/>
                    <span>{t("navigation.article")}</span>
                </Link>
                { ["staff", "manager", "admin"].includes(role) &&
                    <Link href={`/${role}/incident-management`} title={t("navigation.incident-management")}
                        className={curPage.includes("/incident-management")
                            ? "item-navigation w-full py-2 px-2 mb-1 rounded-md flex items-center justify-center font-semibold text-blue bg-light-blue duration-200 hover:cursor-pointer"
                            : "item-navigation w-full py-2 px-2 mb-1 rounded-md flex items-center justify-center font-semibold text-gray duration-200 hover:cursor-pointer hover:text-black hover:bg-light-gray active:scale-90"}
                    >
                        <FontAwesomeIcon className="iconNavigation w-5 flex justify-center py-1" icon={faLocationDot}/>
                        <span>{t("navigation.incident-management")}</span>
                    </Link>
                }
                { ["manager", "admin"].includes(role) &&
                    <Link href={`/${role}/member-management`} title={t("navigation.member-management")}
                        className={curPage.includes("/member-management")
                            ? "item-navigation w-full py-2 px-2 mb-1 rounded-md flex items-center justify-center font-semibold text-blue bg-light-blue duration-200 hover:cursor-pointer"
                            : "item-navigation w-full py-2 px-2 mb-1 rounded-md flex items-center justify-center font-semibold text-gray duration-200 hover:cursor-pointer hover:text-black hover:bg-light-gray active:scale-90"}
                    >
                        <FontAwesomeIcon className="iconNavigation w-5 flex justify-center py-1" icon={faAddressCard}/>
                        <span>{t("navigation.member-management")}</span>
                    </Link>
                }
                { ["admin"].includes(role) &&
                    <Link href={`/${role}/user-management`} title={t("navigation.user-management")}
                        className={curPage.includes("/user-management")
                            ? "item-navigation w-full py-2 px-2 mb-1 rounded-md flex items-center justify-center font-semibold text-blue bg-light-blue duration-200 hover:cursor-pointer"
                            : "item-navigation w-full py-2 px-2 mb-1 rounded-md flex items-center justify-center font-semibold text-gray duration-200 hover:cursor-pointer hover:text-black hover:bg-light-gray active:scale-90"}
                    >
                        <FontAwesomeIcon className="iconNavigation w-5 flex justify-center py-1" icon={faUser}/>
                        <span>{t("navigation.user-management")}</span>
                    </Link>
                }
                { ["admin"].includes(role) &&
                    <Link href={`/${role}/oganization`} title={t("navigation.organization-management")}
                        className={curPage.includes("/oganization")
                            ? "item-navigation w-full py-2 px-2 mb-1 rounded-md flex items-center justify-center font-semibold text-blue bg-light-blue duration-200 hover:cursor-pointer"
                            : "item-navigation w-full py-2 px-2 mb-1 rounded-md flex items-center justify-center font-semibold text-gray duration-200 hover:cursor-pointer hover:text-black hover:bg-light-gray active:scale-90"}
                    >
                        <FontAwesomeIcon className="iconNavigation w-5 flex justify-center py-1" icon={faUsers}/>
                        <span>{t("navigation.organization-management")}</span>
                    </Link>
                }
                { ["admin"].includes(role) &&
                    <Link href={`/${role}/map-data`} title={t("navigation.geographic-data")}
                        className={curPage.includes("/map-data")
                            ? "item-navigation w-full py-2 px-2 mb-1 rounded-md flex items-center justify-center font-semibold text-blue bg-light-blue duration-200 hover:cursor-pointer"
                            : "item-navigation w-full py-2 px-2 mb-1 rounded-md flex items-center justify-center font-semibold text-gray duration-200 hover:cursor-pointer hover:text-black hover:bg-light-gray active:scale-90"}
                    >
                        <FontAwesomeIcon className="iconNavigation w-5 flex justify-center py-1" icon={faGlobe}/>
                        <span>{t("navigation.geographic-data")}</span>
                    </Link>
                }
                { ["staff", "manager", "admin"].includes(role) &&
                    <Link href={`/${role}/report`} title={t("navigation.report")}
                        className={curPage.includes("/report")
                            ? "item-navigation w-full py-2 px-2 mb-1 rounded-md flex items-center justify-center font-semibold text-blue bg-light-blue duration-200 hover:cursor-pointer"
                            : "item-navigation w-full py-2 px-2 mb-1 rounded-md flex items-center justify-center font-semibold text-gray duration-200 hover:cursor-pointer hover:text-black hover:bg-light-gray active:scale-90"}
                    >
                        <FontAwesomeIcon className="iconNavigation w-5 flex justify-center py-1" icon={faPrint}/>
                        <span>{t("navigation.report")}</span>
                    </Link>
                }
                { ["user", "staff", "manager", "admin"].includes(role) &&
                    <Link href={`/${role}/saved`} title={t("navigation.saved")}
                        className={curPage.includes("/saved")
                            ? "item-navigation w-full py-2 px-2 mb-1 rounded-md flex items-center justify-center font-semibold text-blue bg-light-blue duration-200 hover:cursor-pointer"
                            : "item-navigation w-full py-2 px-2 mb-1 rounded-md flex items-center justify-center font-semibold text-gray duration-200 hover:cursor-pointer hover:text-black hover:bg-light-gray active:scale-90"}
                    >
                        <FontAwesomeIcon className="iconNavigation w-5 flex justify-center py-1" icon={faBookmark}/>
                        <span>{t("navigation.saved")}</span>
                    </Link>
                }
                { ["user", "staff", "manager", "admin"].includes(role) &&
                    <Link href={`/${role}/trash`} title={t("navigation.trash")}
                        className={curPage.includes("/trash")
                            ? "item-navigation w-full py-2 px-2 mb-1 rounded-md flex items-center justify-center font-semibold text-blue bg-light-blue duration-200 hover:cursor-pointer"
                            : "item-navigation w-full py-2 px-2 mb-1 rounded-md flex items-center justify-center font-semibold text-gray duration-200 hover:cursor-pointer hover:text-black hover:bg-light-gray active:scale-90"}
                    >
                        <FontAwesomeIcon className="iconNavigation w-5 flex justify-center py-1" icon={faTrash}/>
                        <span>{t("navigation.trash")}</span>
                    </Link>
                }
                { ["user", "staff", "manager", "admin"].includes(role) &&
                    <Link href={`/${role}/setting`} title={t("navigation.setting")}
                        className={curPage.includes("/setting")
                            ? "item-navigation w-full py-2 px-2 mb-1 rounded-md flex items-center justify-center font-semibold text-blue bg-light-blue duration-200 hover:cursor-pointer"
                            : "item-navigation w-full py-2 px-2 mb-1 rounded-md flex items-center justify-center font-semibold text-gray duration-200 hover:cursor-pointer hover:text-black hover:bg-light-gray active:scale-90"}
                    >
                        <FontAwesomeIcon className="iconNavigation w-5 flex justify-center py-1" icon={faGear}/>
                        <span>{t("navigation.setting")}</span>
                    </Link>
                }
            </ul>
            { !fullName &&
                <Link href={`/access/sign-in`} title={t("access.signIn")}
                    className="navigationBar item-navigation w-full py-2 px-2 rounded-md flex items-center justify-center
                        font-semibold text-gray border
                        duration-200 hover:cursor-pointer hover:text-black hover:bg-light-gray active:scale-90"
                >
                    <FontAwesomeIcon className="iconNavigation w-5 flex justify-center py-1" icon={faUser}/>
                    <span>{t("access.signIn")}</span>
                </Link>
            }
            { fullName &&
                <Link href={`/${role}/profile`} title={fullName}
                    className="navigationBar item-navigation navBar-profile w-full !px-1 py-1 mt-2 flex items-center justify-center text-gray rounded-md
                        duration-200 hover:cursor-pointer hover:text-black hover:bg-light-gray active:scale-90"
                >
                    <img
                        className="w-[40px] aspect-square rounded-full"
                        src={avatar}
                        alt={fullName}
                    />
                    <div className="flex flex-col truncate">
                        <span className="truncate font-semibold">{fullName}</span>
                        <span className="truncate font-normal text-[4px]">{email}</span>
                    </div>
                </Link>
            }
        </div>
    );
};