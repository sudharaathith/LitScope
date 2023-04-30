import React from 'react';
import InputBox from './InputBox';
import { Select, Option } from "@material-tailwind/react";

function CreateForm(props) {
    return (
        <div className='flex flex-col justify-center mt-3'>
        <div className='flex flex-row  items-center'>
            <div className="ml-10 w-1/2  items-center">
                Domine name
            </div>
            <InputBox className="" text="domain name" />
        </div>
        <div className='flex flex-row  items-center mt-3'>
            <div className="ml-10 w-1/2  items-center">
                Domine name
            </div>
            <InputBox className="" text="domain name" />
        </div>
        
        </div>
    );
}

export default CreateForm;