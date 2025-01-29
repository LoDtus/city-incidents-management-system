import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faLocationCrosshairs, faHouse } from '@fortawesome/free-solid-svg-icons'

function MapController({leafletControlWidth, setIdAddLocation, locateMe, backHome}) {
    return (
        <div className='fixed z-[500] mr-2 bottom-0' style={{right: `${leafletControlWidth}px`}}>
            <button className='w-[30px] h-[30px] bg-white rounded-[4px] shadow-md mb-1 mr-1 text-[#7d7d7d]
                duration-200 hover:bg-hover-gray hover:text-red active:scale-90'
                onClick={() => setIdAddLocation(true)}
            >
                <FontAwesomeIcon icon={faLocationDot} />
            </button>
            <button className='w-[30px] h-[30px] bg-white rounded-[4px] shadow-md mb-1 mr-1 text-[#7d7d7d]
                duration-200 hover:bg-hover-gray hover:text-blue active:scale-90'
                onClick={() => locateMe()}
            >
                <FontAwesomeIcon icon={faLocationCrosshairs} />
            </button>
            <button className='w-[30px] h-[30px] bg-white rounded-[4px] shadow-md mb-1 text-dark-gray
                duration-200 hover:bg-hover-gray active:scale-90'
                onClick={() => backHome()}
            >
                <FontAwesomeIcon icon={faHouse} />
            </button>
        </div>
    )
}
export default MapController;