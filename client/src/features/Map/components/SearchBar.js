import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FiFilter } from "react-icons/fi";
import { Button, Tooltip } from 'antd';
import { useState } from 'react';

function SearchBar() {
    const [position, setPosition] = useState('end');

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
                    <Button
                        className='flex justify-center items-center w-full h-full relative'
                        shape="circle"
                        icon={
                            <FiFilter
                                className='mt-[5px]'
                                size={18}/>
                        }
                    />
                    
                </label>
            </div>
        </div>
    )
}
export default SearchBar;