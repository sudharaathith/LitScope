import React, { useEffect, useState } from 'react';
import InputBox from './InputBox';
import { Select, Option, Button } from "@material-tailwind/react";
import SearchApi from './SearchApi';

function CreateForm(props) {
    let [domainName, setDomainName] = useState("");
    let [mode, setMode] = useState("");
    let [search, setSearch] = useState({});

    return (
        <div className='flex flex-col justify-center mt-3'>
        <div className='flex flex-row  items-center'>
            <div className="ml-10 w-1/2  items-center">
                Domine name
            </div>
            <div className=" absolute left-60">
            <InputBox className="" onChange={(val)=>{
                setDomainName(val);
            }} text="domain name" /></div>
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
       {(mode==='api')?<SearchApi onChange={(val)=>{
            setSearch(val);
       }}/>:null}
        </div>
        <div className='ml-8 mt-10'>
        {!(mode==='')?<Button onClick={()=>{
            let data = {
            "domine_name":domainName,
            "mode":mode,
            "search":search
        }

        fetch("http://127.0.0.1:8000/api/domain/create/",{
            method: "POST",
            headers: {
    'Content-Type': 'application/json'
    // Other possible headers
  },
            body: JSON.stringify(data),
            mode:'no-cors'
            }

        )
        }}>
            Save
        </Button>:null}
        </div>
        </div>
    );
}

export default CreateForm;