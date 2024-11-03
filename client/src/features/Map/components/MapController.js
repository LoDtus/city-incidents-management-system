import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faLocationCrosshairs, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

function MapController() {
    return (
        <div className="z-20 flex justify-end items-end basis-[30%] mr-2">
            <button 
                className="flex items-center justify-center bg-white rounded-md p-3 text-dark-gray mr-1 shadow-md
                duration-200 hover:bg-light-blue hover:text-red active:scale-90">
                <FontAwesomeIcon icon={faLocationDot} />
            </button>
            <button 
                className="flex items-center justify-center bg-white rounded-md p-3 text-dark-gray mr-1 shadow-md
                duration-200 hover:bg-light-blue hover:text-blue active:scale-90">
                <FontAwesomeIcon icon={faLocationCrosshairs} />
            </button>
            <div className="flex items-center bg-white rounded-md p-1 shadow-md duration-200 active:scale-95">
                <button 
                    className="bg-white flex justify-center items-center overflow-hidden p-2 rounded-md text-dark-gray mr-1
                    duration-200 hover:bg-light-blue hover:text-black">
                    <FontAwesomeIcon icon={faPlus} />
                </button>
                <div className="text-dark-gray">|</div>
                <button 
                    className="bg-white flex justify-center items-center overflow-hidden p-2 rounded-md text-dark-gray ml-1
                    duration-200 hover:bg-light-blue hover:text-black">
                    <FontAwesomeIcon icon={faMinus} />
                </button>
            </div>
        </div>
    )
}
export default MapController;