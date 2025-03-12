import ListMessage from "./ListMessage"
import ChatBar from "./ChatBar"
import UserInformation from "./UserInformation"

function ChatArea({openChatInfor}) {
    return (
        <div className={openChatInfor
        ? 'w-[56%] h-full z-10 flex flex-col p-2 transition-all'
        : 'w-[78%] h-full z-10 flex flex-col p-2 transition-all'}>
            <UserInformation/>
            <div className="h-full w-full flex flex-col items-center justify-center overflow-hidden
            rounded-md bg-white shadow-md border border-gray-border">
                <ListMessage/>
                <ChatBar/>
            </div>
        </div>
    )
}
export default ChatArea