import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FiFilter, FiMessageSquare } from "react-icons/fi";
import { FaRegBell } from "react-icons/fa";

function SearchBar({}) {
    return (
        <div className="w-[100vw] flex">
            <div className="basis-[30%] ml-2 mr-1 my-2"></div>
            <div className="z-20 basis-[40%] mx-1 my-2 flex rounded-full shadow-md bg-white">
                <input
                    className="outline-0 rounded-l-full border-r-0 py-2 pl-5 pr-3 w-full"
                    placeholder="Bạn muốn tìm gì?"
                    type="text"
                    name="mapLayout_searchBar"
                    id="map_searchBar"
                />
                <label
                    className="flex items-center rounded-r-full border-l-0 py-2 pr-5"
                    htmlFor="map_searchBar">
                    <FontAwesomeIcon className="w-[20px] h-[20px] text-dark-gray" icon={faMagnifyingGlass} />
                </label>
            </div>

            <div className="z-20 basis-[30%] ml-1 mr-2 my-2 flex justify-between items-center rounded-full shadow-md bg-white">
                <button
                    className="flex items-center rounded-full mx-1 py-1 px-6 text-dark-gray box-border border-2 border-dark-gray
                    duration-200 hover:bg-light-gray hover:text-black hover:border-black active:scale-90">
                    <FiFilter size={20} className=""/>
                    <span className="ml-2 font-semibold">Mặc định</span>
                </button>

                <div className="flex items-center">
                    <button 
                        className="w-[30px] h-[30px] mx-2 rounded-full flex justify-center items-center text-dark-gray
                        duration-200 hover:bg-light-gray hover:text-black active:scale-90">
                        <FaRegBell size={18} strokeWidth={2.5}/>
                    </button>
                    <button 
                        className="w-[30px] h-[30px] mx-2 rounded-full flex justify-center items-center text-dark-gray
                        duration-200 hover:bg-light-gray hover:text-black active:scale-90">
                        <FiMessageSquare size={18} strokeWidth={2.5}/>
                    </button>
                    <Link to='/access'
                        className="py-1 px-6 mx-1 rounded-full font-semibold text-dark-gray box-border border-2 border-dark-gray
                        duration-200 hover:text-black hover:bg-light-gray hover:border-black active:scale-90"
                        >
                        Đăng nhập
                    </Link>
                    {/* <button>
                        <img
                            className="w-[30px] h-[30px] mx-1 rounded-full"
                            src="./assets/exp-ava.jpg"
                            alt="" />
                    </button> */}
                </div>
            </div>
        </div>
    )
}
export default SearchBar;