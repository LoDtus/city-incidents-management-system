import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons'
import { PiPlusCircleBold } from "react-icons/pi";

export default function AddIncidentBar() {
    return (
        <div className="fixed z-[500] bottom-1 flex justify-center basis-[40%]">
            <button
                className="flex items-center w-fit py-1 px-12 mr-1 rounded-md text-white bg-blue shadow-md
                duration-200 active:scale-90">
                <PiPlusCircleBold className='mr-2' size={22}/>
                <span className="font-semibold">Thêm sự cố</span>
            </button>
            <button
                className="flex items-center p-3 rounded-md bg-blue text-white shadow-md
                duration-200 active:scale-90">
                <FontAwesomeIcon icon={faArrowUpFromBracket} />
            </button>
        </div>
    )
};