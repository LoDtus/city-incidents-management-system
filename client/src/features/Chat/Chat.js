"use client";
import './style.css';
import ListChatRoom from './components/ListChatRoom';
import ChatArea from './components/ChatArea';
import ChatInformation from './components/ChatInformation';
import { useSelector } from 'react-redux';
import { getProps } from '@/redux/selectors';

function LayoutChat() {
    const navBarWidth = useSelector((state) => getProps(state).widthNavBar);
    const openChatInfor = useSelector((state) => getProps(state).openChatInfor);

    return (
        <div className='bg-darken-white w-[100vw] h-fit relative'>
            <div className='flex h-[100vh]'>
                <div style={{minWidth: `${navBarWidth}px`}}></div>
                <div className='flex w-full'>
                    <ListChatRoom/>
                    <ChatArea
                        openChatInfor={openChatInfor}
                    />
                </div>
            </div>
            <ChatInformation
                openChatInfor={openChatInfor}
            />
        </div>
    )
}
export default LayoutChat;