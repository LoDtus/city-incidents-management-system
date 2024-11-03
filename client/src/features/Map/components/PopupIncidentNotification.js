import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown, faXmark, faFire } from '@fortawesome/free-solid-svg-icons'

function PopupIncidentNotification() {
    let listIncident = []
    for (let i=0; i<9; i++) {
        listIncident.push(
            <div 
                key={i}
                className='mb-2 mr-1 bg-white bg-opacity-60 py-1 pr-1 rounded-md shadow-md box-border flex
                duration-200 hover:cursor-pointer hover:bg-opacity-100 active:scale-90'>
                <div className='flex items-center'>
                    <FontAwesomeIcon icon={faFire}
                        className='h-[25px] px-4 text-red'
                    />
                </div>
                <div className='grow flex flex-col'>
                    <span className='text-black font-semibold text-xl'>Ùn tắc giao thông</span>
                    <span className='text-black'>Cách đây 2km</span>
                </div>
                <div className='h-fit px-1 flex items-center justify-center'>
                    <FontAwesomeIcon icon={faXmark}
                        className='h-[25px] duration-200 text-dark-gray hover:text-black'
                    />
                </div>
            </div>
        )
    }

    return (
        <div className='h-[33%] flex mx-2'>
            <div className='grow'></div>
            <div className='z-20 relative'>
                <div
                    className='rounded-md bg-white shadow-md aspect-square h-full duration-200 hover:cursor-pointer active:scale-90'>
                </div>
                <div className='absolute inset-0 rounded-md flex flex-col pointer-events-none'>
                    <div className='flex justify-center mt-2'>
                        <button className='rounded-full px-1 duration-200 hover:shadow-md active:scale-90 pointer-events-auto'>
                            <FontAwesomeIcon icon={faChevronUp}/>
                        </button>
                    </div>
                    <div className='grow'></div>
                    <div className='flex justify-center mb-2'>
                        <button className='rounded-full px-1 duration-200 hover:shadow-md active:scale-90 pointer-events-auto'>
                            <FontAwesomeIcon icon={faChevronDown}/>
                        </button>
                    </div>
                </div>
            </div>
            <div className='z-20 popupIncidentNotification_listIncident basis-[20%] overflow-y-auto ml-2'>
                {listIncident}
            </div>
        </div>
    )
}
export default PopupIncidentNotification