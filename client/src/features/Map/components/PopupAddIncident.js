import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons';
import { Button, Input, Dropdown } from 'antd';
import { useState } from 'react';
const { TextArea } = Input;

const items = [
    {
        key: "1",
        label: (
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.antgroup.com"
            >
                1st menu item
            </a>
        ),
    },
    {
        key: "2",
        label: (
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.aliyun.com"
            >
                2nd menu item
            </a>
        ),
    },
    {
        key: "3",
        label: (
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.luohanacademy.com"
            >
                3rd menu item
            </a>
        ),
    },
];

export default function PopupAddIncident() {
    const [ timeOption, setTimeOption ] = useState(false);

    function changeTimeOption(e) {
        console.log('click ', e);
    }

    return (
        <div className='h-[75%] flex'>
            <div className='basis-[27%]'></div>
            <div className='z-20 basis-[46%] bg-white shadow-md rounded-md'>
                <span>Add Incident</span>
                <span>Thêm chi tiết</span>
                {/* Logo nhảy ra chỗ khác */}
                <div className='flex items-center'>
                    <span className='mr-2'>Title</span>
                    <Input
                        placeholder="Tên sự cố của bạn"
                    />
                </div>
                <div className=''>
                    <span className='mr-2'>Description</span>
                    <TextArea
                        rows={4}
                        maxLength={6}
                        placeholder="Mô tả sự cố của bạn"
                    />
                </div>
                <div className='flex items-center'>
                    <div>
                        <span className='mr-2'>Thời gian xảy ra</span>
                        <Button
                            className='!hover:bg-red'
                            type="primary"
                        >
                            Vừa xảy ra
                        </Button>
                    </div>
                    <div>
                        <span>Type</span>
                        <Dropdown
                            menu={{
                                items,
                            }}
                            placement="bottomRight"
                        >
                            <Button>bottomRight</Button>
                        </Dropdown>
                    </div>
                </div>
                <div className='flex items-center'>
                    <div>
                        <span className='mr-2'>Số người ảnh hưởng</span>
                        
                    </div>
                    <div>
                        <span>Phạm vi ảnh hưởng</span>
                        
                    </div>
                </div>

                <Button>Submit</Button>
            </div>
            <div className='basis-[27%]'></div>
        </div>
    );
};