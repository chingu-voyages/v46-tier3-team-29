import React from 'react'
import LoginForm from '../components/Forms/Login'
import { getCurrentUser } from '@/lib/auth';
import { redirect } from 'next/navigation';

const Login = async () => {
    const session = await getCurrentUser();
    //?? for debug only
    console.log(session);

    //redirect to main mage if he is authenticated;
    if (session?.user) {
        redirect('/');
    }

    return (
        <section className='flex h-full p-2 sm:p-10 w-full justify-center items-center '>
            <LoginForm />
        </section>
    )
}

export default Login
