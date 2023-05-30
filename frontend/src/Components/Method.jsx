 import {React, useEffect, useState} from 'react';
import { Select, Option, Textarea } from "@material-tailwind/react";

function Method(props) {
    let [method, setMethod] = useState("");
    let [postData, setPostData] = useState("");

    let update = ()=>{
        props.onChange({
            "method":method,
            "data":postData
        })
    }

    useEffect(update,[method,postData])

    return (
        <div>
             <div className='flex flex-row mt-24'>
            <div className="ml-10 items-center">
                mode
            </div>
            <div className=" absolute left-60">
        <Select label='mode' onChange={(e)=>{
            setMethod(e)
        }}>
            <Option value='GET'>GET</Option>
            <Option value='POST'>POST</Option>
        </Select>
        </div>
        </div>
       {(method==='POST')? <div className='flex flex-row mt-7'>
            <div className="ml-10 items-center">
                Postdata 
            </div>
            <div className=" absolute left-60 w-96">
        <Textarea onChange={(e)=>{
            setPostData(e.target.value)
        }} label='postdata'></Textarea>
        </div>
        </div>:null}
        </div>
    );
}

export default Method;