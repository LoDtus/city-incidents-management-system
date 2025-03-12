import './style.css'
import ListChat from './components/ListChat';
import ChatArea from './components/ChatArea';
import ChatInformation from './components/ChatInformation';
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { getNavBarWidth, getOpenChatInfor } from '../../redux/selectors'

function LayoutChat() {
    const navBarWidth = useSelector(getNavBarWidth);
    const openChatInfor = useSelector(getOpenChatInfor);

    return (
        <div className='bg-darken-white w-[100vw] h-fit relative'>
            <div className='flex h-[100vh]'>
                <div style={{minWidth: `${navBarWidth}px`}}></div>
                <div className='flex w-full'>
                    <ListChat/>
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