"use client";
import { useTranslations } from "next-intl";
import { Input, Button, Checkbox } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import Link from "next/link";

export default function SignIn() {
    const t = useTranslations();
    const [ email, setEmail ] = useState(null);
    const [ password, setPassword ] = useState(null);
    const [ rememberMe, setRememberMe ] = useState(false);

    function abc() {

    }

    function signIn() {

    }

    return (
        <div className='w-[100vw] h-[100vh] top-0 left-0 flex items-center justify-center'>
            <div
                className='fixed w-[100vw] h-[100vh] top-0 left-0 bg-black opacity-50 z-40'
                onClick={() => abc()}></div>
            <div className='flex flex-col p-6 z-50 rounded-md bg-white'>
                <span className='flex justify-center font-xl font-bold mb-4 text-2xl'>{t("access.signIn")}</span>
                <div className="flex mb-2">
                {/* Sua lai label */}
                    <label className='basis-[30%]' htmlFor="username-signup">Email:</label>
                    <Input
                        className='basis-[70%]'
                        placeholder="example@email.com"
                        onChange={(e) => setEmail(e.target.value)}
                        allowClear
                    />
                </div>
                <div className="flex mb-2">
                    <label className='basis-[30%]' htmlFor="password-signup">{t("access.password")}</label>
                    <Input.Password
                        placeholder="Aa"
                        onChange={(e) => setPassword(e.target.value)}
                        iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined/>)}
                    />
                </div>

                <div className="flex items-center mb-2 h-8 ">
                    <Checkbox
                        onClick={() => abc()}
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
                    onClick={() => signIn()}
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