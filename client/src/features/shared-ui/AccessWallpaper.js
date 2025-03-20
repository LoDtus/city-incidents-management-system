"use client";
import Image from "next/image";

export default function AccessWallpaper() {
    return (
        <div>
            <Image
                className='blur-[2px] z-0'
                src='/imgs/thumbnail-hanoi-1.jpg'
                alt="Hoan Kiem Lake - Hanoi"
                layout="fill"
                objectFit="cover"
            />
            <div className='absolute z-1 top-0 left-0 w-[100vw] h-[100vh] bg-black opacity-30'></div>
        </div>
    );
};