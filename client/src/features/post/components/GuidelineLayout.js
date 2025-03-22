"use client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faBookmark } from '@fortawesome/free-regular-svg-icons';
import Image from 'next/image';
import TopPosts from './TopPosts';
import LatestPosts from './LatestPosts';

export default function GuidelineLayout() {
    let topPosts = []; // 1 ô to, với các ô nhỏ bên trong
    let latestPosts = []; // 
    let relevantPosts = [];
    let videoList = [];
    let otherPosts = [];

    function openGuideline() {

    }


    for (let i=0; i<20; i++) {
        otherPosts.push(
            <div key={i}
                className="basis-[25%] p-3">
                <button className="gridLayout_item flex flex-col justify-center duration-200 hover:cursor-pointer"
                    onClick={() => openGuideline()}
                >
                    <div className='gridLayout_poster w-full aspect-square bg-white border border-gray-border rounded-md duration-200'>
                        {/* <Image
                        className="gridLayout_poster w-full aspect-square rounded-md duration-200"
                        src="" alt="" /> */}
                    </div>
                    <span className="text-wrap text-left font-semibold text-2xl underline duration-200">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit
                    </span>
                    <div>tag</div>
                    {/* Tac gia, luu, yeu thich */}
                    <div className="w-full flex justify-between items-center">
                        <div className="flex">
                            <div className="flex items-center">
                                <Image
                                    className="rounded-full w-[35px] aspect-square"
                                    src="" alt="" />
                            </div>
                            <div className="text-left">
                                <div>Tác giả</div>
                                <div>2 giờ trước</div>
                            </div>
                        </div>
                        <div className='flex'>
                            <div>
                                <FontAwesomeIcon icon={faHeart} />
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faBookmark} />
                            </div>
                        </div>
                    </div>
                </button>
            </div>
        )
    }

    return (
        <div className="w-full flex">
            <div className="basis-[5%]"></div>
            <div className='basis-[90%] flex flex-wrap'>
                <TopPosts
                    topPosts={topPosts}
                />
                <LatestPosts
                    latestPosts={latestPosts}
                />
                {videoList}
                {otherPosts}
            </div>
            <div className="basis-[5%]"></div>
        </div>
    );
};