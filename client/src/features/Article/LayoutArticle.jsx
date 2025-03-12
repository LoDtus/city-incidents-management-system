import './style.css'
import Header from '../Header/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  } from '@fortawesome/free-solid-svg-icons'
import GridLayout from './components/GridLayout';
import ListLayout from './components/ListLayout';

function LayoutArticle() {
    // Quan trọng
    // Mới nhất
    // Thịnh hành
    // Hướng dẫn

    return (
        <div className='w-full bg-darken-white p-2'>
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
                    {/* <GridLayout/> */}
                    <ListLayout/>
                </div>
                <div className="basis-[12%]"></div>
            </div>
        </div>
    )
}
export default LayoutArticle;