export function MessageSentFromOtherWithImg({allMessages, i, setHoverIndex, handleMouseLeave}) {
    return (
        <div className="flex w-full basis-[60%]"
            onMouseEnter={() => setHoverIndex(i)}
            onMouseLeave={handleMouseLeave}>
            <div className="px-1 flex items-start">
                <img src="https://i.pinimg.com/originals/0a/15/16/0a1516e49d02244dcf174a14b0f60994.jpg" alt=""
                    className="rounded-full w-[45px]"
                />
            </div>
            <div className="basis-[55%]">
                <div className="flex relative w-fit">
                    <div className="py-2 px-4 bg-[#e5e9f0] w-fit mb-1 rounded-md">{allMessages[i].message}</div>
                    {/* {
                        (hoverIndex === i || visible === i) && (
                            <MoreFeatures
                                i = {i}
                                role = {true}
                                setCurrentEmoji={setCurrentEmoji}
                                visible = {visible}
                                setVisible = {setVisible}
                                moreFeatures = {moreFeatures}
                            />
                        )
                    }
                    {
                        visible === i && (
                            <div className={(visible === i) ? "menu block z-10 absolute bottom-[100px] right-[-33px] bg-white shadow-lg p-1 rounded-lg" : "hidden"}>
                                <div className='pl-3 pr-10 py-1 hover:cursor-pointer hover:bg-[#f2f2f2] font-semibold rounded-md mb-1'>Chi tiết</div>
                                <div className='pl-3 pr-10 py-1 hover:cursor-pointer hover:bg-[#f2f2f2] font-semibold rounded-md mb-1'>Chỉnh sửa</div>
                                <div className='pl-3 pr-10 py-1 hover:cursor-pointer hover:bg-[#f2f2f2] font-semibold rounded-md mb-1'>Chuyển tiếp</div>
                                <div className='pl-3 pr-10 py-1 hover:cursor-pointer hover:bg-[#f2f2f2] font-semibold rounded-md mb-1'>Ghim</div>
                                <div className='pl-3 pr-10 py-1 hover:cursor-pointer hover:bg-[#f2f2f2] font-semibold rounded-md'>Xóa</div>
                            </div>
                        )
                    } */}
                </div>
                <div className="text-sm mb-3 ml-1">{allMessages[i].from}</div>
            </div>
        </div>
    )
};

export function MessageSentFromOtherNoImg({allMessages, i, setHoverIndex, handleMouseLeave}) {
    return (
        <div className="flex w-full basis-[60%]"
            onMouseEnter={() => setHoverIndex(i)}
            onMouseLeave={handleMouseLeave}>
            <div className="w-[53px]"></div>
            <div className="basis-[55%]">
                <div className="flex relative w-fit">
                    <div className="py-2 px-4 bg-[#e5e9f0] w-fit mb-1 rounded-md">{allMessages[i].message}</div>
                    {/* {
                        (hoverIndex === i || visible === i) && (
                            <MoreFeatures
                                i = {i}
                                role = {true}
                                setCurrentEmoji={setCurrentEmoji}
                                visible = {visible}
                                setVisible = {setVisible}
                                moreFeatures = {moreFeatures}
                            />
                        )
                    }
                    {
                        visible === i && (
                            <div className={(visible === i) ? "menu block z-10 absolute bottom-[100px] right-[-33px] bg-white shadow-lg p-1 rounded-lg" : "hidden"}>
                                <div className='pl-3 pr-10 py-1 hover:cursor-pointer hover:bg-[#f2f2f2] font-semibold rounded-md mb-1'>Chi tiết</div>
                                <div className='pl-3 pr-10 py-1 hover:cursor-pointer hover:bg-[#f2f2f2] font-semibold rounded-md mb-1'>Chỉnh sửa</div>
                                <div className='pl-3 pr-10 py-1 hover:cursor-pointer hover:bg-[#f2f2f2] font-semibold rounded-md mb-1'>Chuyển tiếp</div>
                                <div className='pl-3 pr-10 py-1 hover:cursor-pointer hover:bg-[#f2f2f2] font-semibold rounded-md mb-1'>Ghim</div>
                                <div className='pl-3 pr-10 py-1 hover:cursor-pointer hover:bg-[#f2f2f2] font-semibold rounded-md'>Xóa</div>
                            </div>
                        )
                    } */}
                </div>
            </div>
        </div>
    )
};

export function MessageSentFromMeWithImg({allMessages, i, setHoverIndex, handleMouseLeave}) {
    return (
        <div className="flex w-full basis-[60%] justify-end"
            onMouseEnter={() => setHoverIndex(i)}
            onMouseLeave={handleMouseLeave}>
            <div className="basis-[55%] flex flex-col items-end">
                <div className="flex relative w-fit">
                    <div className="py-2 px-4 bg-blue w-fit mb-1 text-white rounded-md">{allMessages[i].message}</div>
                    {/* {
                        (hoverIndex === i || visible === i) && (
                            <MoreFeatures
                                i = {i}
                                role = {false}
                                setCurrentEmoji={setCurrentEmoji}
                                visible = {visible}
                                setVisible = {setVisible}
                                moreFeatures = {moreFeatures}
                            />
                        )
                    }
                    {
                        visible === i && (
                            <div className={(visible === i) ? "menu block z-10 absolute bottom-[100px] right-[-33px] bg-white shadow-lg p-1 rounded-lg" : "hidden"}>
                                <div className='pl-3 pr-10 py-1 hover:cursor-pointer hover:bg-[#f2f2f2] font-semibold rounded-md mb-1'>Chi tiết</div>
                                <div className='pl-3 pr-10 py-1 hover:cursor-pointer hover:bg-[#f2f2f2] font-semibold rounded-md mb-1'>Chỉnh sửa</div>
                                <div className='pl-3 pr-10 py-1 hover:cursor-pointer hover:bg-[#f2f2f2] font-semibold rounded-md mb-1'>Chuyển tiếp</div>
                                <div className='pl-3 pr-10 py-1 hover:cursor-pointer hover:bg-[#f2f2f2] font-semibold rounded-md mb-1'>Ghim</div>
                                <div className='pl-3 pr-10 py-1 hover:cursor-pointer hover:bg-[#f2f2f2] font-semibold rounded-md'>Xóa</div>
                            </div>
                        )
                    } */}
                </div>
                <div className="text-sm mb-3 ml-1">{allMessages[i].from}</div>
            </div>
            <div className="px-1 flex items-start">
                <img src="https://i.pinimg.com/originals/0a/15/16/0a1516e49d02244dcf174a14b0f60994.jpg" alt=""
                    className="rounded-full w-[45px]"
                />
            </div>
        </div>
    )
};

export function MessageSentFromMeNoImg({allMessages, i, setHoverIndex, handleMouseLeave}) {
    return (
        <div className="flex w-full basis-[60%] justify-end"
            onMouseEnter={() => setHoverIndex(i)}
            onMouseLeave={handleMouseLeave}>
            <div className="basis-[55%] flex flex-col items-end">
                <div className="flex relative w-fit">
                    <div className="py-2 px-4 bg-blue w-fit mb-1 text-white rounded-s-md rounded-md font-normal">{allMessages[i].message}</div>
                    {/* {
                        (hoverIndex === i || visible === i) && (
                            <MoreFeatures
                                i = {i}
                                role = {false}
                                setCurrentEmoji={setCurrentEmoji}
                                visible = {visible}
                                setVisible = {setVisible}
                                moreFeatures = {moreFeatures}
                            />
                        )
                    }
                    {
                        visible === i && (
                            <div className={(visible === i) ? "menu block z-10 absolute bottom-[100px] right-[-33px] bg-white shadow-lg p-1 rounded-lg" : "hidden"}>
                                <div className='pl-3 pr-10 py-1 hover:cursor-pointer hover:bg-[#f2f2f2] font-semibold rounded-md mb-1'>Chi tiết</div>
                                <div className='pl-3 pr-10 py-1 hover:cursor-pointer hover:bg-[#f2f2f2] font-semibold rounded-md mb-1'>Chỉnh sửa</div>
                                <div className='pl-3 pr-10 py-1 hover:cursor-pointer hover:bg-[#f2f2f2] font-semibold rounded-md mb-1'>Chuyển tiếp</div>
                                <div className='pl-3 pr-10 py-1 hover:cursor-pointer hover:bg-[#f2f2f2] font-semibold rounded-md mb-1'>Ghim</div>
                                <div className='pl-3 pr-10 py-1 hover:cursor-pointer hover:bg-[#f2f2f2] font-semibold rounded-md'>Xóa</div>
                            </div>
                        )
                    } */}
                </div>
            </div>
            <div className="w-[52px]"></div>
        </div>
    )
};