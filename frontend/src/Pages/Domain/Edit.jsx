import React, { useEffect, useState } from 'react';
import CreateForm from '../../Components/CreateForm';
import NavBar from '../../Components/NavBar';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Edit(props) {

    const params = useParams();
    let[data, setData] = useState(null);

    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/domain/edit/'+params.domain).then((res)=>{
            setData(res.data);
        })
    },[])
    useEffect(()=>{
        console.log(data)
    },[data])

    return (
        <div>
            <NavBar/>
            <div className='mt-[100px] text-4xl ml-10 font-[Poppins] text-gray-800 cursor-default'>
                Edit
            </div>
            <div className=' mx-auto'>
                <CreateForm startData={data} />
            </div>
        </div>
    );
}

export default Edit;