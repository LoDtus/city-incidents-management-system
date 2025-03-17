import { useState, useEffect, useRef } from "react"
import { getDayOfWeek } from '../../../common/dateUtils'
import { MessageSentFromMeNoImg, MessageSentFromMeWithImg, MessageSentFromOtherNoImg, MessageSentFromOtherWithImg } from "./Message";

export default function ListMessage() {
    let allMessages = [
        {
            "id": "",
            "message": "1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate atque dolorem soluta odit accusamus pariatur corporis harum veniam perspiciatis ad et, numquam totam adipisci laborum qui, aliquam nobis facere placeat.",
            "timestamp": "2022-01-01 10:00:00",
            "from": "abc@gmail.com",
            "to": ""
        },
        {
            "id": "",
            "message": "2 Lorem ipsum dolor sit amet consectetur adipisicing elit",
            "timestamp": "2022-01-01 11:00:00",
            "from": "abc@gmail.com",
            "to": ""
        },
        {
            "id": "",
            "message": "3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate atque dolorem soluta odit accusamus pariatur corporis harum veniam perspiciatis ad et, numquam totam adipisci laborum qui, aliquam nobis facere placeat.",
            "timestamp": "2022-01-01 12:00:00",
            "from": "abc@gmail.com",
            "to": ""
        },
        {
            "id": "",
            "message": "4 Lorem",
            "timestamp": "2022-01-02 09:00:00",
            "from": "nguyentrunglong@gmail.com",
            "to": ""
        },
        {
            "id": "",
            "message": "5 Lorem ipsum dolor sit amet consectetur adipisicing elit",
            "timestamp": "2022-01-02 10:00:00",
            "from": "abc@gmail.com",
            "to": ""
        },
        {
            "id": "",
            "message": "6 Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eligendi in quibusdam sequi! At corporis fugiat libero autem rerum ab aut sit molestias, quaerat consequuntur consectetur facilis ipsa, obcaecati veniam?",
            "timestamp": "2022-01-02 11:00:00",
            "from": "nguyentrunglong@gmail.com",
            "to": ""
        },
        {
            "id": "",
            "message": "7 Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eligendi in quibusdam sequi! At corporis fugiat libero autem rerum ab aut sit molestias, quaerat consequuntur consectetur facilis ipsa, obcaecati veniam?",
            "timestamp": "2022-01-02 12:00:00",
            "from": "abc@gmail.com",
            "to": ""
        },
        {
            "id": "",
            "message": "8 Lorem",
            "timestamp": "2022-01-03 09:00:00",
            "from": "xyz@gmail.com",
            "to": ""
        },
        {
            "id": "",
            "message": "9 Lorem ipsum dolor sit amet consectetur adipisicing elit",
            "timestamp": "2022-01-03 10:00:00",
            "from": "xyz@gmail.com",
            "to": ""
        },
        {
            "id": "",
            "message": "10 Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eligendi in quibusdam sequi! At corporis fugiat libero autem rerum ab aut sit molestias, quaerat consequuntur consectetur facilis ipsa, obcaecati veniam?",
            "timestamp": "2022-01-03 11:00:00",
            "from": "nguyentrunglong@gmail.com",
            "to": ""
        },
        {
            "id": "",
            "message": "11 Lorem",
            "timestamp": "2022-01-03 12:00:00",
            "from": "nguyentrunglong@gmail.com",
            "to": ""
        },
        {
            "id": "",
            "message": "12 Lorem ipsum dolor sit amet consectetur adipisicing elit",
            "timestamp": "2022-01-04 09:00:00",
            "from": "nguyentrunglong@gmail.com",
            "to": ""
        },
        {
            "id": "",
            "message": "13 Lorem ipsum dolor sit amet.",
            "timestamp": "2022-01-04 10:00:00",
            "from": "user1@gmail.com",
            "to": ""
        },
        {
            "id": "",
            "message": "14 Vivamus lacinia odio vitae vestibulum.",
            "timestamp": "2022-01-04 11:00:00",
            "from": "user1@gmail.com",
            "to": ""
        },
        {
            "id": "",
            "message": "15 Cras pulvinar mattis nunc sed blandit.",
            "timestamp": "2022-01-04 12:00:00",
            "from": "user1@gmail.com",
            "to": ""
        },
        {
            "id": "",
            "message": "16 Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eligendi in quibusdam sequi! At corporis fugiat libero autem rerum ab aut sit molestias, quaerat consequuntur consectetur facilis ipsa, obcaecati veniam?",
            "timestamp": "2022-01-05 09:00:00",
            "from": "user2@gmail.com",
            "to": ""
        },
        {
            "id": "",
            "message": "17 Sed porttitor lectus nibh.",
            "timestamp": "2022-01-05 10:00:00",
            "from": "user2@gmail.com",
            "to": ""
        },
        {
            "id": "",
            "message": "18 Curabitur non nulla sit amet nisl tempus.",
            "timestamp": "2022-01-05 11:00:00",
            "from": "user3@gmail.com",
            "to": ""
        },
        {
            "id": "",
            "message": "19 Curabitur aliquet quam id dui posuere.",
            "timestamp": "2022-01-05 12:00:00",
            "from": "user3@gmail.com",
            "to": ""
        },
        {
            "id": "",
            "message": "20 Mauris blandit aliquet elit.",
            "timestamp": "2022-01-06 09:00:00",
            "from": "user3@gmail.com",
            "to": ""
        },
        {
            "id": "",
            "message": "21 Nulla porttitor accumsan tincidunt.",
            "timestamp": "2022-01-06 10:00:00",
            "from": "user4@gmail.com",
            "to": ""
        },
        {
            "id": "",
            "message": "22 Donec sollicitudin molestie malesuada.",
            "timestamp": "2022-01-06 11:00:00",
            "from": "nguyentrunglong@gmail.com",
            "to": ""
        },
        {
            "id": "",
            "message": "23 Pellentesque in ipsum id orci porta dapibus.",
            "timestamp": "2022-01-06 12:00:00",
            "from": "nguyentrunglong@gmail.com",
            "to": ""
        },
        {
            "id": "",
            "message": "24 Vestibulum ante ipsum primis.",
            "timestamp": "2022-01-07 09:00:00",
            "from": "user5@gmail.com",
            "to": ""
        },
        {
            "id": "",
            "message": "25 Proin eget tortor risus.",
            "timestamp": "2022-01-07 10:00:00",
            "from": "nguyentrunglong@gmail.com",
            "to": ""
        },
        {
            "id": "",
            "message": "26 Vivamus suscipit tortor eget felis.",
            "timestamp": "2022-01-07 11:00:00",
            "from": "user6@gmail.com",
            "to": ""
        },
        {
            "id": "",
            "message": "27 Donec rutrum congue leo.",
            "timestamp": "2022-01-07 12:00:00",
            "from": "nguyentrunglong@gmail.com",
            "to": ""
        },
        {
            "id": "",
            "message": "28 Praesent sapien massa.",
            "timestamp": "2022-01-07 09:00:00",
            "from": "nguyentrunglong@gmail.com",
            "to": ""
        },
        {
            "id": "",
            "message": "29 Curabitur arcu erat.",
            "timestamp": "2022-01-07 10:00:00",
            "from": "user7@gmail.com",
            "to": ""
        },
        {
            "id": "",
            "message": "30 Quisque velit nisi.",
            "timestamp": "2022-01-07 11:00:00",
            "from": "user7@gmail.com",
            "to": ""
        },
        {
            "id": "",
            "message": "31 Nulla quis lorem ut libero.",
            "timestamp": "2022-01-08 12:00:00",
            "from": "user7@gmail.com",
            "to": ""
        },
        {
            "id": "",
            "message": "32 Vestibulum ac diam sit amet.",
            "timestamp": "2022-01-09 09:00:00",
            "from": "user8@gmail.com",
            "to": ""
        }
    ]

    let result = [];
    let currentEmail = "nguyentrunglong@gmail.com";
    const [hoverIndex, setHoverIndex] = useState(null);
    const [visible, setVisible] = useState(null);
    const moreFeatures = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (moreFeatures.current && !moreFeatures.current.contains(event.target) && 
            moreFeatures.current && !moreFeatures.current.contains(event.target)) {
                setVisible(null);
            }
        }
        function handleKeyPress_Scroll() {
            setVisible(null);
        }
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleKeyPress_Scroll);
        window.addEventListener('scroll', handleKeyPress_Scroll);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleKeyPress_Scroll);
            window.removeEventListener('scroll', handleKeyPress_Scroll);
        };
    }, []);

    const handleMouseLeave= () => {
        if (visible === null) {
            setHoverIndex(null);
        }
    };

    let dayOfWeek_before, dayOfWeek_current, dayOfWeek_after;
    for (let i=0; i<allMessages.length; i++) {
        dayOfWeek_current = getDayOfWeek(allMessages[i].timestamp);
        dayOfWeek_before = (i > 0) ? getDayOfWeek(allMessages[i-1].timestamp) : null;
        dayOfWeek_after = (i < allMessages.length - 1) ? getDayOfWeek(allMessages[i+1].timestamp) : null;

        if (i===0 || (i>0 && dayOfWeek_current!==dayOfWeek_before)) { // Add day of week
            result.push(
                <div className="flex justify-center mb-2 text-[#8a8d91] text-semibold">
                    {dayOfWeek_current}, ngày {allMessages[i].timestamp.slice(8, 10)} tháng {allMessages[i].timestamp.slice(5, 7)} năm {allMessages[i].timestamp.slice(0, 4)}
                </div>
            )
        }

        if (allMessages[i].from !== currentEmail) { // send by the others
            if (i === allMessages.length - 1 ||
                (allMessages.length > 1 && i < allMessages.length - 1 && (
                    (allMessages[i].from !== allMessages[i+1].from) ||
                    (dayOfWeek_current !== dayOfWeek_after)))) {
                result.push(
                    <MessageSentFromOtherWithImg
                        allMessages={allMessages}
                        i={i}
                        setHoverIndex={setHoverIndex}
                        handleMouseLeave={handleMouseLeave}
                    />
                )
            } else {
                result.push(
                    <MessageSentFromOtherNoImg
                        allMessages={allMessages}
                        i={i}
                        setHoverIndex={setHoverIndex}
                        handleMouseLeave={handleMouseLeave}
                    />
                )
            }
        } else { // send by me
            if (i === allMessages.length - 1 ||
                (allMessages.length > 1 && i < allMessages.length - 1 && (
                    (allMessages[i].from !== allMessages[i+1].from) ||
                    (dayOfWeek_current !== dayOfWeek_after)))) {
                result.push(
                    <MessageSentFromMeWithImg
                        allMessages={allMessages}
                        i={i}
                        setHoverIndex={setHoverIndex}
                        handleMouseLeave={handleMouseLeave}
                    />
                )
            } else {
                result.push(
                    <MessageSentFromMeNoImg
                        allMessages={allMessages}
                        i={i}
                        setHoverIndex={setHoverIndex}
                        handleMouseLeave={handleMouseLeave}
                    />
                )
            }
        }
    }

    return (
        <div className="listMessage w-full px-2 pt-3 pb-1 grow overflow-y-auto">
            {result}
        </div>
    )
};