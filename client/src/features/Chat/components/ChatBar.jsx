import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Input } from 'antd'
import { faFaceSmileWink } from '@fortawesome/free-regular-svg-icons'
import { faPaperclip, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { useState, useRef, useEffect } from 'react'

export default function ChatBar() {
    const [text, setText] = useState('');
    const fileInp = useRef(null);

    function importFile() {
        fileInp.current.click();
    }
    function handleFileImport(event) {
        const file = event.target.files[0];
        if (file) {
            console.log("File uploaded:", file.name);
            // Xử lý file tải lên tại đây (ví dụ: gửi lên server)
        }
    }
    useEffect(() => {
        // console.log(text);
    }, [text]);

    return (
        <div className="w-full p-1 flex items-center">
            <input ref={fileInp}
                type="file" name="" id=""
                className='hidden'
                onChange={handleFileImport}
            />
            <button className='w-[40px] aspect-square p-2 flex items-center justify-center rounded-full text-gray mx-2
                duration-200 hover:text-black hover:bg-light-gray active:scale-90'
                onClick={() => importFile()}>
                <FontAwesomeIcon
                    icon={faPaperclip}
                    size='lg'/>
            </button>

            <Input placeholder="Aa" variant="filled"
                onBlur={(e) => setText(e.target.value)}
            />

            <button className='w-[40px] aspect-square p-2 flex items-center justify-center rounded-full text-gray mr-1 ml-2
                duration-200 hover:text-black hover:bg-light-gray active:scale-90'>
                <FontAwesomeIcon
                    icon={faFaceSmileWink}
                    size='lg'/>
            </button>
            <button className='w-[40px] aspect-square p-2 flex items-center justify-center rounded-full text-gray mr-2
                duration-200 hover:text-blue hover:bg-light-blue active:scale-90'>
                <FontAwesomeIcon
                    icon={faPaperPlane}
                    size='md'/>
            </button>
        </div>
    )
};