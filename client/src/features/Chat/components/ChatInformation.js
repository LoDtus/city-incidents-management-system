"use client";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { getProps } from '@/redux/selectors';
import { useSelector } from 'react-redux';
import { Button, Image, Menu } from 'antd';
import { useRef, useState } from 'react';

export default function ChatInformation({openChatInfor}) {
    const navBarWidth = useSelector((state) => getProps(state).widthNavBar);
    const [ curTabMedia, setCurTabMedia ] = useState(null);
    const swiperRef = useRef(null);

    let members = [
        { key: "3", label: "Images" },
        { key: "4", label: "Videos" },
        { key: "5", label: "Files" },
        { key: "6", label: "URLs" },
    ];

    const items = [
        {
            key: "menu1",
            label: "Chat Room Information",
            // icon: <MailOutlined />,
            children: [
                { key: "1", label: "Chat name" },
                { key: "2", label: "URL Shared" },
            ],
        },
        {
            type: "divider",
        },
        {
            key: "menu2",
            label: "Members",
            // icon: <AppstoreOutlined />,
            children: [
                
            ],
        },
        {
            type: "divider",
        },
        {
            key: "sub4",
            label: "Media Attachments",
            // icon: <SettingOutlined />,
            children: [
                { key: "MEDIA_IMAGES", label: "Images" },
                { key: "MEDIA_VIDEOS", label: "Videos" },
                { key: "MEDIA_FILES", label: "Files" },
                { key: "MEDIA_LINKS", label: "Links" },
            ],
        },
        {
            type: "divider",
        },
    ];


    
    let imgsList = [];
    for (let i=0; i<50; i++) {
        imgsList.push(
            <div className='basis-[33.33%] px-1 pb-1'>
                <Image
                    className='rounded-md'
                    src='https://i.pinimg.com/736x/71/2d/58/712d5802368e0a7cafc9f530e328daf4.jpg'
                    alt=''
                />
            </div>
        )
    }

    function openTab(tab) {
        setCurTabMedia(tab);
    }

    function moveToMediaAttachments(tab) {
        setCurTabMedia(tab);
        swiperRef.current.slideNext();
    }

    function backToChatInformation() {
        swiperRef.current.slidePrev();
    }

    function handleItems(e) {
        console.log('click ', e);
        if (e.key.includes('MEDIA')) {
            moveToMediaAttachments(e.key);
        }
    }


    return (
        <div
            className={openChatInfor
            ? "chatInformation fixed h-[100vh] top-0 right-0 transition-all"
            : "chatInformation fixed h-[100vh] top-0 right-[-22vw] transition-all"}
            style={{width: `calc(100vw - ${navBarWidth}px)`}}>
            <div className='w-full h-full flex justify-end'>
                <div className='basis-[78%]'></div>
                <Swiper
                    className="mySwiper basis-[22%] py-2 pr-2"
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    irection={'horizontal'}
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                >
                    <SwiperSlide className='flex flex-col items-center h-full bg-white shadow-md rounded-md border border-gray-border'>
                        <Menu
                            className='!w-full !font-semibold'
                            onClick={(e) => handleItems(e)}
                            defaultOpenKeys={['menu1']}
                            mode="inline"
                            items={items}
                        />
                    </SwiperSlide>
                    <SwiperSlide className='flex flex-col items-center h-full bg-white shadow-md rounded-md border border-gray-border'>
                        <ul className='w-full h-fit flex justify-between p-2'>
                            <Button className='w-[30px] h-[30px] aspect-square rounded-full flex justify-center items-center
                                duration-200 hover:bg-light-blue'
                                onClick={() => backToChatInformation()}>
                                <FontAwesomeIcon icon={faAngleLeft} />
                            </Button>
                            <Button className={curTabMedia === 'MEDIA_IMAGES'
                                ? '!px-3'
                                : '!px-3 duration-200 active:scale-90'}
                                onClick={() => openTab('MEDIA_IMAGES')}
                                type={curTabMedia === 'MEDIA_IMAGES' ? 'primary' : 'default'}
                            >
                                Images
                            </Button>
                            <Button className={curTabMedia === 'MEDIA_VIDEOS'
                                ? '!px-3'
                                : '!px-3 duration-200 active:scale-90'}
                                onClick={() => openTab('MEDIA_VIDEOS')}
                                type={curTabMedia === 'MEDIA_VIDEOS' ? 'primary' : 'default'}
                            >
                                Videos
                            </Button>
                            <Button className={curTabMedia === 'MEDIA_FILES'
                                ? '!px-3'
                                : '!px-3 duration-200 active:scale-90'}
                                onClick={() => openTab('MEDIA_FILES')}
                                type={curTabMedia === 'MEDIA_FILES' ? 'primary' : 'default'}
                            >
                                Files
                            </Button>
                            <Button className={curTabMedia === 'MEDIA_LINKS'
                                ? '!px-3'
                                : '!px-3 duration-200 active:scale-90'}
                                onClick={() => openTab('MEDIA_LINKS')}
                                type={curTabMedia === 'MEDIA_LINKS' ? 'primary' : 'default'}
                            >
                                Links
                            </Button>
                        </ul>
                        <div className='w-full h-full px-2 pb-2 flex flex-wrap overflow-y-scroll'>
                            {imgsList}
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
};