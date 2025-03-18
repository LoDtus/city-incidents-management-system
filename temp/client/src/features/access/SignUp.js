"use client";
import { Input, Button, Checkbox, notification } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { useEffect, useState, useRef } from 'react';
import Link from "next/link";
import { useTranslations } from 'next-intl';
import { isValidEmail } from '@/lib/utils/validationUtils';
import { checkEmailexists, signUp } from '@/lib/services/userServices';
import { useDispatch } from 'react-redux';
import userSlice from '@/redux/slices/userSlice';
import { useRouter } from 'next/navigation';

export default function SignUp() {
    const t = useTranslations();
    const dispatch = useDispatch();
    const router = useRouter();

    const [ fullName, setFullname ] = useState(null);
    const [ email, setEmail ] = useState(null);
    const [ password, setPassword ] = useState(null);
    const [ rePassword, setRePassword ] = useState(null);
    const [ address, setAddress ] = useState(null);
    const [ rememberMe, setRememberMe ] = useState(false);
    const [ emailExists, setEmailExists ] = useState(false);

    const isClicking = useRef(false);
    const [ api, contextHolder ] = notification.useNotification();

    function openNotification(message = t("access.noti_warn"), description = '', placement = 'topLeft') {
        api.warning({message, description, placement});
    };

    async function isExists(e) {
        const response = await checkEmailexists(e);
        setEmailExists(response);
    }

    async function handleEmail(e) {
        if (!e) return;
        setEmail(e);
        setTimeout(() => {
            if (!isClicking.current) {
                if (!isValidEmail(e)) return openNotification(undefined, t("access.warningEmail_valid"), undefined);
                isExists(e);
            }
        }, 300);
    }

    useEffect(() => {
        if (emailExists) return openNotification(undefined, t("access.warningEmail_exists"), undefined);
    }, [emailExists]);

    async function handleRePassword(e) {
        if (!e) return;
        setTimeout(() => {
            if (!isClicking.current && e != password) {
                openNotification(undefined, t("access.warningRePassword_valid"), undefined);
                setRePassword("");
            }
        }, 300);
    }

    async function getSignUp() {
        isClicking.current = true;
        setTimeout(() => isClicking.current = false, 300);

        if (!email) return openNotification(undefined, t("access.warningEmail_null"), undefined);
        if (!isValidEmail(email)) return openNotification(undefined, t("access.warningEmail_valid"), undefined);
        isExists(email);
        if (emailExists) return openNotification(undefined, t("access.warningEmail_exists"), undefined);
        if (!password) return openNotification(undefined, t("access.warningPassword_null"), undefined);
        if (!rePassword) return openNotification(undefined, t("access.warningRePassword_null"), undefined);
        if (rePassword !== password) return openNotification(undefined, t("access.warningRePassword_valid"), undefined);
        
        const response = await signUp(email, password);
        // handle error
        const userData = {
            "id": response.id,
            "email": response.email,
            "password": response.password,
            "active": response.active,
            "role": response.roles[0].role,
            "rememberMe": rememberMe,
        }
        dispatch(userSlice.actions.setUser(userData));
        redirectByRole(userData.role);
    }

    function redirectByRole(role) {
        switch (role) {
            case 'ROLE_ADMIN':
                router.push('/admin');
                break;
            case 'ROLE_STAFF':
                router.push('/staff');
                break;
            case 'ROLE_MANAGER':
                router.push('/manager');
                break;
            case 'ROLE_USER':
                router.push('/user');
                break;
            default:
                router.push('/');
                break;
        }
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
            <span className='flex justify-center font-xl font-bold mb-4 text-2xl'>{t("access.signUp")}</span>
                <div className="flex mb-2">
                    <label className='basis-[30%] hover:cursor-pointer' htmlFor="signUp-fullName">{t("access.fullName")}</label>
                    <Input
                        id='signUp-fullName'
                        placeholder='Aa'
                        onChange={(e) => setFullname(e.target.value.trim())}
                        allowClear
                    />
                </div>
                <div className="flex mb-2">
                    <label className='basis-[30%] hover:cursor-pointer' htmlFor="signUp-email">Email:</label>
                    <Input
                        id='signUp-email'
                        placeholder='example@email.com'
                        onBlur={(e) => handleEmail(e.target.value.trim())}
                        allowClear
                    />
                </div>
                <div className="flex mb-2">
                    <label className='basis-[30%] hover:cursor-pointer' htmlFor="signUp-password">{t("access.password")}</label>
                    <Input.Password
                        id='signUp-password'
                        placeholder='Aa'    
                        onChange={(e) => setPassword(e.target.value.trim())}
                        iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined/>)}
                        maxLength={30}
                        showCount
                    />
                </div>
                <div className="flex mb-2">
                    <label className='basis-[30%] hover:cursor-pointer' htmlFor="signUp-rePassword">{t("access.rePassword")}</label>
                    <Input.Password
                        id='signUp-rePassword'
                        placeholder='Aa'
                        onBlur={(e) => handleRePassword(e.target.value.trim())}
                        onChange={(e) => setRePassword(e.target.value.trim())}
                        value={rePassword}
                        iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined/>)}
                        maxLength={30}
                        showCount
                    />
                </div>
                <div className="flex mb-2">
                    <label className='basis-[30%] hover:cursor-pointer' htmlFor="signUp-address">{t("access.address")}</label>
                    <Input
                        id='signUp-address'
                        placeholder='Aa'
                        onChange={(e) => setAddress(e.target.value.trim())}
                        allowClear
                    />
                </div>

                <div className="flex items-center mb-2 h-8 ">
                    <Checkbox
                        onClick={(e) => setRememberMe(e.target.checked)}
                    >
                        {t("access.rememberMe")}
                    </Checkbox>
                    {/* forgot password */}
                </div>

                <Button
                    className=''
                    onClick={() => getSignUp()}
                    type="primary"
                >
                    {t("access.signUp")}
                </Button>
                <div>
                    <span>{t("access.hasAccount")}</span>
                    <Link href='/access/signIn' 
                        className='text-blue ml-2'
                    >
                        {t("access.signIn")}
                    </Link>
                </div>
            </div>
        </div>
    );
};