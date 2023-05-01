import React, { useEffect } from 'react';
import CreateForm from '../../Components/CreateForm';
import NavBar from '../../Components/NavBar';
import axios from 'axios';

function Edit(props) {

    useEffect(()=>{
        axios
    },[])

    return (
        <div>
            <NavBar/>
            <div className='mt-[100px] text-4xl ml-10 font-[Poppins] text-gray-800 cursor-default'>
                Edit
            </div>
            <div className=' mx-auto'>
                <CreateForm startData="" />
            </div>
        </div>
    );
}

export default Edit;