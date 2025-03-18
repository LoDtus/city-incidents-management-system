import { useEffect, useLayoutEffect, useState } from "react";

export default function ContextMenu({menuPos, menuRef, rightClick}) {
    const [ posX, setPosX ] = useState(0);
    const [ posY, setPosY ] = useState(0);
    const [ active, setActive ] = useState(false);

    useLayoutEffect(() => {
        if (menuRef.current && menuPos) {
            setPosX (menuPos.x + menuRef.current.scrollWidth >= window.innerWidth
                ? menuPos.x - menuRef.current.scrollWidth - 8
                : menuPos.x);
            setPosY (menuPos.y + menuRef.current.scrollHeight >= window.innerHeight
                ? window.innerHeight - menuRef.current.scrollHeight - 20
                : menuPos.y);
        }

        if (rightClick) {
            setActive(false);
            setTimeout(() => {
                setActive(true);
            }, 60);
        } else {
            setPosX(0);
            setPosY(0);
            setActive(false);
        }
    }, [menuPos, menuRef]);

    return (
        <div ref={menuRef} style={{left: `${posX}px`, top: `${posY}px`}}
            className={ active
            ? `w-[300px] h-[300px] fixed z-[1000] m-1 py-2 px-3 shadow-md rounded-md bg-white
            duration-200 opacity-100 transition-opacity`
            : `w-[300px] h-[300px] fixed z-0 m-1 py-2 px-3 shadow-md rounded-md bg-white
            duration-200 opacity-0 ease-in-out transition-opacity`}
        >
            <div className="flex justify-center items-center mb-1 p-1 rounded-md">Thông tin địa điểm đã đánh dấu</div>
            <div className="border flex justify-center items-center mb-1 p-1 rounded-md
                duration-200 hover:cursor-pointer hover:bg-[#f0f0f4] active:scale-90">1</div>
            <div className="border flex justify-center items-center mb-1 p-1 rounded-md
                duration-200 hover:cursor-pointer hover:bg-[#f0f0f4] active:scale-90">2</div>
            <div className="border flex justify-center items-center mb-1 p-1 rounded-md
                duration-200 hover:cursor-pointer hover:bg-[#f0f0f4] active:scale-90">3</div>
        </div>    
    );
}