import React from 'react';
import InputBox from './InputBox';

function SearchApi(props) {
    return (
        <div>
            <div className='flex flex-row  items-center'>
            <div className="ml-10 w-1/2  items-center">
                Domine name
            </div>
            <div className=" absolute left-60">
            <InputBox className="" text="domain name" /></div>
        </div>
        </div>
    );
}

export default SearchApi;