'use client'
import { LoginDataTypes } from '@/types/common.types';
import React, { Dispatch, HTMLInputTypeAttribute } from 'react'

type InputFormProps = {
    type: HTMLInputTypeAttribute;
    data: any;
    setData: Dispatch<React.SetStateAction<LoginDataTypes>>;
    placeholder: string;
    name: string | HTMLInputTypeAttribute;
}

const InputForm = ({ data, setData, placeholder, type, name }: InputFormProps) => {
    // data changing fuction
    const handleChange = (field: typeof type, value: string) => {
        switch (field) {
            case 'email':
                setData((user) => ({
                    ...user,
                    email: value
                }))
                console.log("data: " + value)
            case 'password':
                setData((user) => ({
                    ...user,
                    password: value
                }))
            default:
                console.log("nothing is being updated");
        }
    }

    return (
        <article>
            <input
                className='w-full   border border-gray-200 outline-none px-4 py-2 rounded-md shadow-sm'
                type={type}
                placeholder={placeholder}
                name={name}
                onChange={(e) => handleChange(name, e.target?.value)}
            />
        </article>
    )
}

export default InputForm
