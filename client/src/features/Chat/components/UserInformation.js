import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import propertiesSlice from '@/redux/slices/propertiesSlice';

function UserInformation() {
    const dispatch = useDispatch();
    const [openChatInfor, setOpenChatInfor] = useState(false);

    useEffect(() => {
        dispatch(propertiesSlice.actions.setOpenChatInfor(openChatInfor));
    }, [openChatInfor]);

    return (
        <div className="basis-[3%] bg-white shadow-md flex justify-between items-center p-1 mb-2 rounded-md border border-gray-border">
            <button className="rounded-md flex items-center py-2 pl-3 pr-5 text-black
                duration-200 hover:bg-soft-gray active:scale-90">
                <div className='mr-3'>
                    <img className='rounded-full h-[50px] aspect-square' src="./assets/exp-ava.jpg" alt="" />
                </div>
                <div className='flex flex-col items-start'>
                    <div className='font-semibold text-lg'>Người dùng 1</div>
                    <div className='text-sm'>Đã online 4 tiếng trước</div>
                </div>
            </button>
            <input
                className='hidden'
                type="checkbox" name="chat_openInfor" id="chat_openInfor"
                onChange={(e) => setOpenChatInfor(e.target.checked)}
            />
            <label htmlFor='chat_openInfor'
                className='p-3 mr-2 rounded-full flex justify-center items-center text-dark-gray
                duration-200 hover:cursor-pointer hover:bg-soft-gray hover:text-black active:scale-90'>
                <FontAwesomeIcon className='w-[25px] h-[25px]' icon={faCircleInfo} />
            </label>
        </div>
    )
}
export default UserInformation