'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import InputForm from '../../Input'
import { LoginDataTypes } from '@/types/common.types'
import Button from '../../Button'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'

const LoginForm = () => {
    const router = useRouter();

    const [loginData, setLoginData] = useState<LoginDataTypes>({
        email: "",
        password: ""
    })
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: MouseEvent) => {
        e.preventDefault();
        console.log(loginData)

        try {
            setLoading(true);

            //?? sign In
            const res = await signIn("credentials", {
                redirect: false,
                email: loginData.email,
                password: loginData.password,

            })

            //??
            console.log('res: ', res);

            if (!res?.error) {
                router.push("/dashboard");
            } else {
                console.log("error accured while authenticating", loginData)
            }
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    }
    return (
        <form
            className='w-full p-6 sm:max-w-sm min-h-max flex flex-col gap-y-6 shadow-sm shadow-gray-300 rounded-md bg-white'
        >
            <section className='flex flex-col justify-center items-center gap-2'>
                <h1 className='text-2xl font-bold '>Login</h1>
                <p className='max-w-sm text-lg font-light text-center'>Hey, Enter your details to get sign  in in your account</p>
            </section>
            <section className='flex flex-col gap-y-2'>
                <InputForm
                    data={loginData}
                    name='email'
                    placeholder='johndoe@racer.com'
                    setData={setLoginData}
                    type='email'
                />
                <InputForm
                    data={loginData}
                    name='password'
                    placeholder='*****'
                    setData={setLoginData}
                    type='password'
                />
                <Button
                    textContent='Sign In'
                    action={handleSubmit}
                />
            </section>
            <section className='flex gap-1 text-sm font-light items-center justify-center text-gray-400'>
                <p>Don't have an account?</p>
                {/* <p>name {loginData?.email}</p>
                <p>passwod {loginData?.password}</p> */}
                <Link
                    className='font-bold hover:underline text-black'
                    href={'/register'}>Register now</Link>
            </section>
        </form>
    )
}

export default LoginForm
