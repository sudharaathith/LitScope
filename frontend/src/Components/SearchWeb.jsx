import React, { useEffect } from 'react';
import { Input} from "@material-tailwind/react";
import { useState } from 'react';
import validator from 'validator'
import WebRoute from './WebRoute';
import Method from './Method';

function SearchWeb(props) {
    let [url , setUrl] = useState("");
    let [methode, setMethode] = useState("");
    let [route, setRoute] = useState([]);
    let [data, setdata] = useState("");

    // useEffect(()=>{
    //     if(props.startData!==null){
    //         setUrl(props.startData['url']);
    //     }
    // },[])
    
    let update = ()=>{
        props.onChange({
            "url":url,
            "route":route,
            "method":methode,
            "data":data
        });
    }
    useEffect(update,[url,methode,route,data]);
    return (

        <div className=' border-t'>
            <div className='ml-8 my-2 text-3xl font-[Poppin]'>
                Search
            </div>
            <div className='flex flex-row  items-center'>
            <div className="ml-10 w-1/2  items-center">
                Url
            </div>
            <div className=" absolute left-60 w-96" >
            <Input 
                success={(validator.matches(url,"^https?://(?:[a-z0-9-]+\\.)+[a-z]{2,}(?:/[^/\\s]*)+((//<<Query>>//)?)$"))}
                error={!(validator.matches(url,"^https?://(?:[a-z0-9-]+\\.)+[a-z]{2,}(?:/[^/\\s]*)+((//<<Query>>//)?)$"))}
                label='Url'
                value={url}
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
           <WebRoute 
        //    startData={props.startData['route']}
            onChange={(val) =>{
            setRoute(val);
           }}/>
        </div>
       <Method 
    //    startData={{"method":props.startData['method'],"data":props.startData['data']}}
        onChange={(val) =>{
        setMethode(val['method'])
        setdata(val['data'])
       }

       }/>
        </div>
    );
}

export default SearchWeb;