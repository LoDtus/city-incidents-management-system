"use client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useRef, useState } from 'react';
import { useTranslations } from "next-intl";
import { Input, Button, Checkbox, notification, Typography } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { isValidEmail } from '@/lib/utils/validationUtils';
import { signIn } from '@/lib/services/userServices';
import { useDispatch } from 'react-redux';
import Link from "next/link";
import userSlice from '@/redux/slices/userSlice';
import { saveUserData } from '@/lib/utils/authenticationUtils';
import useRedirectByRole from '@/lib/hooks/useRedirectByRole';

const { Text } = Typography;

export default function SignIn() {
    const t = useTranslations();
    const dispatch = useDispatch();
    const redirectByRole = useRedirectByRole();

    const [ email, setEmail ] = useState(null);
    const [ password, setPassword ] = useState(null);
    const [ rememberMe, setRememberMe ] = useState(false);

    const isClicking = useRef(false);
    const [ api, contextHolder ] = notification.useNotification();
    
    function openNotification(message = t("access.noti_warn"), description = '', placement = 'topLeft') {
        api.warning({message, description, placement});
    };

    async function getSignIn() {
        isClicking.current = true;
        setTimeout(() => isClicking.current = false, 300);

        if (!email) return openNotification(undefined, t("access.warningEmail_null"), undefined);
        if (!isValidEmail(email)) return openNotification(undefined, t("access.warningEmail_valid"), undefined);
        if (!password) return openNotification(undefined, t("access.warningPassword_null"), undefined);
        
        const response = await signIn(email, password);
        if(response === "Invalid email") return openNotification(undefined, t("access.warningEmail_valid"), undefined);
        if(response === "Invalid password") return openNotification(undefined, t("access.warningPassword_valid"), undefined);
        
        const userData = {
            "id": response.id,
            "email": response.email,
            "password": response.password,
            "active": response.active,
            "role": response.roles[0].role,
            "rememberMe": rememberMe,
        }
        dispatch(userSlice.actions.setUser(userData));
        saveUserData(response.id, response.email, response.password, response.active, response.roles[0].role, rememberMe);
        redirectByRole(userData.role);
    }

    return (
        <div className='w-[100vw] h-[100vh] top-0 left-0 flex items-center justify-center'>
            {contextHolder}
            <div className='flex flex-col p-6 z-2 bg-white rounded-md shadow-lg'>
                <div className='w-full flex justify-end'>
                    <Link href='/guest/map'
                        className='w-[33px] aspect-square flex items-center justify-center rounded-md text-gray
                        duration-200 hover:text-black hover:bg-light-gray active:scale-90'>
                            <FontAwesomeIcon icon={faXmark} />
                    </Link>
                </div>
                <span className='flex justify-center font-xl font-bold mb-4 text-2xl'>{t("access.signIn")}</span>
                <div className="flex items-center mb-1">
                    <label className='basis-[30%] w-[100px] hover:cursor-pointer' htmlFor="signIn-email">Email:</label>
                    <Input
                        classNames='basis-[70%]'
                        id='signIn-email'
                        placeholder="example@email.com"
                        onChange={(e) => setEmail(e.target.value)}
                        maxLength={30}
                        showCount
                        allowClear
                    />
                </div>
                <div className="flex items-center mb-1">
                    <label className='basis-[30%] w-[100px] hover:cursor-pointer' htmlFor="signIn-password">{t("access.password")}</label>
                    <Input.Password
                        classNames='basis-[70%]'
                        id='signIn-password'
                        placeholder="Aa"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined/>)}
                    />
                </div>

                <div className="flex items-center mb-1">
                    <Checkbox onClick={(e) => setRememberMe(e.target.checked)}>
                        {t("access.rememberMe")}
                    </Checkbox>
                    <div className='grow'></div>
                    <Link href='/access/forgot-password' className='text-blue'>
                        <Button className='!px-0' type="link">
                            {t("access.forgotPassword")}
                        </Button>
                    </Link>
                </div>

                <Button type="primary" onClick={() => getSignIn()}>
                    <span className='font-semibold'>
                        {t("access.signIn")}
                    </span>
                </Button>
                <div className='flex items-center'>
                    <Text className='grow'>{t("access.noAccount")}</Text>
                    <Link href='/access/sign-up' className='text-blue ml-2'>
                        <Button className='!px-0' type="link">
                            {t("access.createAccount")}
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};