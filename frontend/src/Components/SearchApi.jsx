import React from 'react';
import { Input } from "@material-tailwind/react";
import { useState } from 'react';
import validator from 'validator'
import Route from './Route';

function SearchApi(props) {
    let [url , setUrl] = useState("");
    return (

        <div>
            <div className='flex flex-row  items-center'>
            <div className="ml-10 w-1/2  items-center">
                Domine name
            </div>
            <div className=" absolute left-60 w-96" >
            <Input 
                success={(validator.matches(url,"^https?://(?:[a-z0-9-]+\\.)+[a-z]{2,}(?:/[^/\\s]*)+((//<<Query>>//)?)$"))}
                error={!(validator.matches(url,"^https?://(?:[a-z0-9-]+\\.)+[a-z]{2,}(?:/[^/\\s]*)+((//<<Query>>//)?)$"))}
                label='Url'
                onChange={(e) => {
                    setUrl(e.target.value)
                }}
            />
        </div>
        </div>
        <div className='flex flex-row mt-6  items-center'>
            <div className="ml-10 w-1/2  items-center">
                Domine name
            </div>
            <div className=" absolute left-60 w-96" >
           <Route/>
            
        </div>
        </div>
        </div>
    );
}

export default SearchApi;