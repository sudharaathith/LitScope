import React, { useState } from 'react';
import InputBox from './InputBox';
import { Select, Option } from "@material-tailwind/react";
import SearchApi from './SearchApi';

function CreateForm(props) {
    let [mode, setMode] = useState("");
    return (
        <div className='flex flex-col justify-center mt-3'>
        <div className='flex flex-row  items-center'>
            <div className="ml-10 w-1/2  items-center">
                Domine name
            </div>
            <div className=" absolute left-60">
            <InputBox className="" text="domain name" /></div>
        </div>
        <div className='flex flex-row  mt-3'>
            <div className="ml-10 items-center">
                mode
            </div>
            <div className=" absolute left-60">
        <Select label='mode' onChange={(e)=>{
            setMode(e)
        }}>
            <Option value='web'>web</Option>
            <Option value='api'>api</Option>
        </Select>
        </div>
        </div>
        <div className=' mt-9'>
       {(mode=='api')?<SearchApi/>:null}
        </div>
        </div>
    );
}

export default CreateForm;