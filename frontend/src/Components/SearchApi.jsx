import React, { useEffect } from 'react';
import { Input, Select, Option } from "@material-tailwind/react";
import { useState } from 'react';
import validator from 'validator'
import Route from './Route';

function SearchApi(props) {
    let [url , setUrl] = useState("");
    let [methode, setMethode] = useState("");
    let [route, setRoute] = useState([]);

    
    let update = ()=>{
        props.onChange({
            "url":url,
            "route":route,
            "methode":methode
        });
    }
    useEffect(update,[url,methode,route]);
    return (

        <div>
            <div className='flex flex-row  items-center'>
            <div className="ml-10 w-1/2  items-center">
                Url
            </div>
            <div className=" absolute left-60 w-96" >
            <Input 
                success={(validator.matches(url,"^https?://(?:[a-z0-9-]+\\.)+[a-z]{2,}(?:/[^/\\s]*)+((//<<Query>>//)?)$"))}
                error={!(validator.matches(url,"^https?://(?:[a-z0-9-]+\\.)+[a-z]{2,}(?:/[^/\\s]*)+((//<<Query>>//)?)$"))}
                label='Url'
                onChange={(e) => {
                    setUrl(e.target.value);
                }}
            />
        </div>
        </div>
        <div className='flex flex-row mt-6  items-center'>
            <div className="ml-10 w-1/2  items-center">
                Route
            </div>
            
        </div>
            <div className=" absolute mt-5 left-10 " >
           <Route onChange={(val) =>{
            setRoute(val);
           }}/>
        </div>
        <div className='flex flex-row mt-24'>
            <div className="ml-10 items-center">
                mode
            </div>
            <div className=" absolute left-60">
        <Select label='mode' onChange={(e)=>{
            setMethode(e)
        }}>
            <Option value='GET'>GET</Option>
            <Option value='POST'>POST</Option>
        </Select>
        </div>
        </div>
        </div>
    );
}

export default SearchApi;