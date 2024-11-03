import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark, faMapLocationDot, faCloud, faPaste, faMessage, faChartSimple, faNewspaper, faBookmark, faPrint, faTrash, faGear } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect, useRef } from "react";
import { useLocation, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import navigationBarSlice from './navigationBarSlice';

function NavigationBar() {
    const dispatch = useDispatch();
    const curPage = useLocation().pathname;
    const elementRef = useRef(null);
    const [stateNavBar, setStateNavBar] = useState(false);

    useEffect(() => {
        if (elementRef.current) {
            const { width, height } = elementRef.current.getBoundingClientRect();
            dispatch(navigationBarSlice.actions.setWidth_navBar(width));
        }
    }, []);

    return (
        <div>
            <label
                htmlFor="toggleNaviagtion"
                className={(stateNavBar && curPage !== '/' && curPage !== '/weather')
                ? 'z-40 fixed w-full h-full bg-black/30 duration-500'
                : 'invisible duration-500'}
                >
            </label>

            <div ref={elementRef}
                className="navigationBar z-50 fixed h-[100vh] p-2 bg-white shadow-xl border-r border-gray-border">
                <input
                    type="checkbox" id="toggleNaviagtion" className="hidden"
                    onChange={(e) => setStateNavBar(e.target.checked)}
                />
                <div className="w-full flex">
                    <label htmlFor="toggleNaviagtion" title="Mở"
                        className="w-fit mb-1">
                        <FontAwesomeIcon
                            id="openNavigation"
                            className="w-fit p-2 rounded-md text-gray
                            duration-200 hover:cursor-pointer hover:text-black hover:bg-light-gray active:scale-90"
                            icon={faBars} />
                    </label>
                    <label htmlFor="toggleNaviagtion" title="Đóng"
                        className="w-fit mb-1">
                        <FontAwesomeIcon
                            id="closeNavigation"
                            className="w-fit p-2 rounded-md text-gray
                            duration-200 hover:cursor-pointer hover:text-black hover:bg-light-gray active:scale-90"
                            icon={faXmark} />
                    </label>
                </div>

                <ul className="navigationBar">
                    <Link to="/"
                        title="Các sự kiện"
                        className={curPage === "/" 
                        ? "item-navigation w-full py-3 px-10 mb-1 rounded-md flex items-center font-semibold text-blue bg-light-blue duration-200 hover:cursor-pointer" 
                        : "item-navigation w-full py-3 px-10 mb-1 rounded-md flex items-center font-semibold text-gray duration-200 hover:cursor-pointer hover:text-black hover:bg-light-gray active:scale-90"}>
                        <FontAwesomeIcon className="iconNavigation w-5 flex justify-center py-1" icon={faMapLocationDot} />
                        <span>Các sự kiện</span>
                    </Link>
                    <Link to="/weather"
                        title="Thời tiết"
                        className={curPage === "/weather" 
                        ? "item-navigation w-full py-3 px-10 mb-1 rounded-md flex items-center font-semibold text-blue bg-light-blue duration-200 hover:cursor-pointer" 
                        : "item-navigation w-full py-3 px-10 mb-1 rounded-md flex items-center font-semibold text-gray duration-200 hover:cursor-pointer hover:text-black hover:bg-light-gray active:scale-90"}>
                        <FontAwesomeIcon className="iconNavigation w-5 flex justify-center py-1" icon={faCloud} />
                        <span>Thời tiết</span>
                    </Link>
                    <Link to="/overview"
                        title="Tổng quan"
                        className={curPage === "/overview" 
                        ? "item-navigation w-full py-3 px-10 mb-1 rounded-md flex items-center font-semibold text-blue bg-light-blue duration-200 hover:cursor-pointer" 
                        : "item-navigation w-full py-3 px-10 mb-1 rounded-md flex items-center font-semibold text-gray duration-200 hover:cursor-pointer hover:text-black hover:bg-light-gray active:scale-90"}>
                        <FontAwesomeIcon className="iconNavigation w-5 flex justify-center py-1" icon={faPaste} />
                        <span>Tổng quan</span>
                    </Link>
                    <Link to="/chat"
                        title="Trò chuyện"
                        className={curPage === "/chat" 
                        ? "item-navigation w-full py-3 px-10 mb-1 rounded-md flex items-center font-semibold text-blue bg-light-blue duration-200 hover:cursor-pointer" 
                        : "item-navigation w-full py-3 px-10 mb-1 rounded-md flex items-center font-semibold text-gray duration-200 hover:cursor-pointer hover:text-black hover:bg-light-gray active:scale-90"}>
                        <FontAwesomeIcon className="iconNavigation w-5 flex justify-center py-1" icon={faMessage} />
                        <span>Trò chuyện</span>
                    </Link>
                    <Link to="/statistic"
                        title="Dữ liệu"
                        className={curPage === "/statistic" 
                        ? "item-navigation w-full py-3 px-10 mb-1 rounded-md flex items-center font-semibold text-blue bg-light-blue duration-200 hover:cursor-pointer" 
                        : "item-navigation w-full py-3 px-10 mb-1 rounded-md flex items-center font-semibold text-gray duration-200 hover:cursor-pointer hover:text-black hover:bg-light-gray active:scale-90"}>
                        <FontAwesomeIcon className="iconNavigation w-5 flex justify-center py-1" icon={faChartSimple} />
                        <span>Dữ liệu</span>
                    </Link>
                    <Link to="/article"
                        title="Bài viết"
                        className={curPage === "/article" 
                        ? "item-navigation w-full py-3 px-10 mb-1 rounded-md flex items-center font-semibold text-blue bg-light-blue duration-200 hover:cursor-pointer" 
                        : "item-navigation w-full py-3 px-10 mb-1 rounded-md flex items-center font-semibold text-gray duration-200 hover:cursor-pointer hover:text-black hover:bg-light-gray active:scale-90"}>
                        <FontAwesomeIcon className="iconNavigation w-5 flex justify-center py-1" icon={faNewspaper} />
                        <span>Bài viết</span>
                    </Link>
                    <Link to="/saved"
                        title="Đã lưu"
                        className={curPage === "/saved" 
                        ? "item-navigation w-full py-3 px-10 mb-1 rounded-md flex items-center font-semibold text-blue bg-light-blue duration-200 hover:cursor-pointer" 
                        : "item-navigation w-full py-3 px-10 mb-1 rounded-md flex items-center font-semibold text-gray duration-200 hover:cursor-pointer hover:text-black hover:bg-light-gray active:scale-90"}>
                        <FontAwesomeIcon className="iconNavigation w-5 flex justify-center py-1" icon={faBookmark} />
                        <span>Đã lưu</span>
                    </Link>
                    <Link to="/report"
                        title="Báo cáo"
                        className={curPage === "/report" 
                        ? "item-navigation w-full py-3 px-10 mb-1 rounded-md flex items-center font-semibold text-blue bg-light-blue duration-200 hover:cursor-pointer" 
                        : "item-navigation w-full py-3 px-10 mb-1 rounded-md flex items-center font-semibold text-gray duration-200 hover:cursor-pointer hover:text-black hover:bg-light-gray active:scale-90"}>
                        <FontAwesomeIcon className="iconNavigation w-5 flex justify-center py-1" icon={faPrint} />
                        <span>Báo cáo</span>
                    </Link>
                    <Link to="/trash"
                        title="Thùng rác"
                        className={curPage === "/trash" 
                        ? "item-navigation w-full py-3 px-10 mb-1 rounded-md flex items-center font-semibold text-blue bg-light-blue duration-200 hover:cursor-pointer" 
                        : "item-navigation w-full py-3 px-10 mb-1 rounded-md flex items-center font-semibold text-gray duration-200 hover:cursor-pointer hover:text-black hover:bg-light-gray active:scale-90"}>
                        <FontAwesomeIcon className="iconNavigation w-5 flex justify-center py-1" icon={faTrash} />
                        <span>Thùng rác</span>
                    </Link>
                    <Link to="/setting"
                        title="Cài đặt"
                        className={curPage === "/setting" 
                        ? "item-navigation w-full py-3 px-10 mb-1 rounded-md flex items-center font-semibold text-blue bg-light-blue duration-200 hover:cursor-pointer" 
                        : "item-navigation w-full py-3 px-10 mb-1 rounded-md flex items-center font-semibold text-gray duration-200 hover:cursor-pointer hover:text-black hover:bg-light-gray active:scale-90"}>
                        <FontAwesomeIcon className="iconNavigation w-5 flex justify-center py-1" icon={faGear} />
                        <span>Cài đặt</span>
                    </Link>
                </ul>
            </div>
        </div>
    )
}
export default NavigationBar;