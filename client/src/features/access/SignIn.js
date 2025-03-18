"use client";
import { useEffect, useRef, useState } from 'react';
import { useTranslations } from "next-intl";
import { Input, Button, Checkbox, notification } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { isValidEmail } from '@/lib/utils/validationUtils';
import { checkEmailexists, signIn } from '@/lib/services/userServices';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import Link from "next/link";
import userSlice from '@/redux/slices/userSlice';
import { saveUserData } from '@/lib/utils/authenticationUtils';
import useRedirectByRole from '@/lib/hooks/useRedirectByRole';

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
    
    function exitLayout() {

    }

    return (
        <div className='w-[100vw] h-[100vh] top-0 left-0 flex items-center justify-center'>
            {contextHolder}
            <div
                className='fixed w-[100vw] h-[100vh] top-0 left-0 bg-black opacity-50 z-40'
                onClick={() => exitLayout()}></div>
            <div className='flex flex-col p-6 z-50 rounded-md bg-white'>
                <span className='flex justify-center font-xl font-bold mb-4 text-2xl'>{t("access.signIn")}</span>
                <div className="flex mb-2">
                    <label className='basis-[30%] hover:cursor-pointer' htmlFor="signIn-email">Email:</label>
                    <Input
                        id='signIn-email'
                        className='basis-[70%]'
                        placeholder="example@email.com"
                        onChange={(e) => setEmail(e.target.value)}
                        allowClear
                    />
                </div>
                <div className="flex mb-2">
                    <label className='basis-[30%] hover:cursor-pointer' htmlFor="signIn-password">{t("access.password")}</label>
                    <Input.Password
                        id='signIn-password'
                        placeholder="Aa"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined/>)}
                    />
                </div>

                <div className="flex items-center mb-2 h-8 ">
                    <Checkbox
                        onClick={(e) => setRememberMe(e.target.checked)}
                    >
                        {t("access.rememberMe")}
                    </Checkbox>
                    <Link href='/access/forgotPassword' prefetch={true}
                        className='text-blue'   
                    >
                        {t("access.forgotPassword")}
                    </Link>
                </div>

                <Button
                    className=''
                    onClick={() => getSignIn()}
                    type="primary"
                >
                    {t("access.signIn")}
                </Button>
                <div>
                    <span>{t("access.noAccount")}</span>
                    <Link href='/access/signUp' prefetch={true}
                        className='text-blue ml-2'
                    >
                        {t("access.createAccount")}
                    </Link>
                </div>
            </div>
        </div>
    );
};