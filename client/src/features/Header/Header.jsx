import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import NavigationHeader from './components/NavigationHeader';

function Header({title}) {
    return (
        <div className='flex flex-col items-center rounded-md bg-white shadow-md px-10'>
            <div className='w-full flex justify-between items-center py-2'>
                <div className='basis-[40%] flex items-center'>
                    <div className="w-[80%] my-1 flex rounded-full border-2 border-dark-gray">
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
                </div>
                <div className='basis-[20%] flex justify-center items-center text-black font-semibold text-2xl'>{title}</div>
                <div className='basis-[40%] flex justify-end items-center'>
                    <Link to='/access'
                        className="h-full w-fit py-1 px-6 rounded-full font-semibold text-dark-gray box-border border-2 border-dark-gray
                        duration-200 hover:text-black hover:bg-light-gray hover:border-black active:scale-90">
                        Đăng nhập
                    </Link>
                </div>
            </div>

            <div className='w-full border-b border-gray'></div>

            <div className='w-full flex justify-center items-center py-2'>
                <NavigationHeader/>
            </div>
        </div>
    )
}
export default Header;