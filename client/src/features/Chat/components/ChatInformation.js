import { getProps } from '@/redux/selectors';
import { useSelector } from 'react-redux';

function ChatInformation({openChatInfor}) {
    const navBarWidth = useSelector((state) => getProps(state).widthNavBar);

    return (
        <div
            className={openChatInfor
            ? "chatInformation fixed h-[100vh] top-0 right-0 transition-all"
            : "chatInformation fixed h-[100vh] top-0 right-[-22vw] transition-all"}
            style={{width: `calc(100vw - ${navBarWidth}px)`}}>
            <div className='w-full h-full flex justify-end'>
                <div className='basis-[78%]'></div>
                <div className='basis-[22%] py-2 pr-2'>
                    <div className='h-full bg-white shadow-md rounded-md border border-gray-border'>
                        <div className="h-full flex items-center justify-center">
                            Chat Information
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ChatInformation