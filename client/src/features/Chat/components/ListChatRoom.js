"use client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { useRef, useState, useEffect } from 'react'
import { Input, Button, Tooltip } from 'antd';

const { Search } = Input;
const onSearch = (value, _e, info) => console.log(info?.source, value);

export default function ListChatRoom() {
    // Hook:
    function shortenText(maxLetter, text) {
        let textArray = text.split('');
        if (textArray.length > maxLetter)
            return textArray.slice(0, maxLetter).join('') + '...';
        return text;
    }

    // Chính thức: Change height of listChat:
    const element1st = useRef(null);
    const [height1st, setHeight1st] = useState(0);
    useEffect(() => {
        function handleResize() {
            if (element1st.current) {
                const { width, height } = element1st.current.getBoundingClientRect();
                setHeight1st(height);
            }
        }

        const resizeObserver = new ResizeObserver(handleResize);
        if (element1st.current)
            resizeObserver.observe(element1st.current);

        return () => {
            if (element1st.current)
                resizeObserver.unobserve(element1st.current);
        };
    }, []);

    // Test
    let text = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque animi nemo aliquam cupiditate, nulla suscipit et explicabo iusto recusandae unde adipisci accusantium! Quibusdam delectus officiis obcaecati explicabo iure! Nesciunt, similique!"
    let tempChat = (
        <button
            className="flex items-center rounded-md py-2 px-3 mb-1 bg-light-blue duration-200">
            <img
                className='h-[60px] aspect-square rounded-full mr-2'
                src="https://i.pinimg.com/736x/71/2d/58/712d5802368e0a7cafc9f530e328daf4.jpg" alt="" />
            <div className="">
                <div className="flex items-center">
                    <div className="grow font-semibold text-left">
                        <span className='text-blue text-lg'>{shortenText(18, "Group 1")}</span>
                    </div>
                    <div
                        className="h-[25px] aspect-square rounded-full ml-2 text-black flex items-center justify-center
                        duration-200 hover:bg-white active:scale-90">
                        <FontAwesomeIcon icon={faEllipsis} />
                    </div>
                </div>
                <div className="flex items-center">
                    <p className="grow text-black text-left">{shortenText(40, text)}</p>
                    <span className="ml-2 text-black">22n</span>
                </div>
            </div>
        </button>
    )

    let listChat = []
    for (let i=0; i<20; i++) {
        listChat.push(
            <button
                key={i}
                className="flex items-center rounded-md py-2 px-3 mb-1
                duration-200 hover:bg-light-gray active:scale-95">
                <img
                    className='h-[60px] aspect-square rounded-full mr-2'
                    src="https://i.pinimg.com/736x/71/2d/58/712d5802368e0a7cafc9f530e328daf4.jpg" alt="" />
                <div className="">
                    <div className="flex items-center">
                        <div className="grow font-semibold text-left">
                            <span className='text-black text-lg'>{shortenText(18, "Group 1")}</span>
                            <span className='ml-1 text-blue'>●</span>
                        </div>
                        <div
                            className="h-[25px] aspect-square rounded-full ml-2 text-black flex items-center justify-center
                            duration-200 hover:bg-white">
                            <FontAwesomeIcon icon={faEllipsis} />
                        </div>
                    </div>
                    <div className="flex items-center">
                        <p className="grow text-black text-left">{shortenText(40, text)}</p>
                        <span className="ml-2 text-black">22n</span>
                    </div>
                </div>
            </button>
        )
    }

    return (
        <div className="w-[22%] flex flex-col py-2 pl-2 max-h-[100vh] z-10">
            <div ref={element1st}>
                <div className="flex justify-between items-center py-1 px-3 rounded-md mb-1">
                    <span className='font-semibold text-xl text-black flex items-center'>Trò chuyện</span>
                    <div className="flex">
                        <Tooltip className='active:scale-90 mr-1'>
                            <Button shape="circle" type="text" icon={<FontAwesomeIcon icon={faEllipsis} />} />
                        </Tooltip>
                        <Tooltip className='active:scale-90'>
                            <Button shape="circle" type="text" icon={<FontAwesomeIcon icon={faPaperPlane} />} />
                        </Tooltip>
                    </div>
                </div>
                
                <div className='w-full mb-2 flex items-center rounded-full shadow-md'>
                    <Search
                        allowClear
                        onSearch={onSearch}
                        id='chat_searchBar'
                        name='chat_searchBar'
                        placeholder="Tìm kiếm cuộc trò chuyện"/>
                </div>
                
                <div className='bg-white shadow-md rounded-t-md p-2 border-x border-t border-gray-border'>
                    <div className="flex">
                        <button 
                            className="py-1 px-5 rounded-md font-semibold mr-1 text-blue bg-light-blue
                            duration-200 active:scale-90">
                            Bạn bè
                        </button>
                        <button 
                            className="py-1 px-5 rounded-md font-semibold text-black
                            duration-200 hover:bg-light-gray active:scale-90 ">
                            Người lạ
                        </button>
                    </div>
                </div>
            </div>

            {/* List Chat */}
            <div className="bg-white px-2 pb-2 rounded-b-md shadow-md border-x border-b border-gray-border">
                <div className='listChat overflow-y-auto' style={{maxHeight: `calc(100vh - ${height1st + 24}px)`}}>
                    {tempChat}
                    {listChat}
                </div>
            </div>
        </div>
    )
};