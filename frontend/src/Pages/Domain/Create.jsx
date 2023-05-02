import React from 'react';
import NavBar from '../../Components/NavBar';
import CreateForm from '../../Components/CreateForm';
import { useParams } from 'react-router-dom';

function Create(props) {
    return (
        <div>
            <NavBar/>
            <div className='mt-[100px] text-4xl ml-10 font-[Poppins] text-gray-800 cursor-default'>
                Create Domain
            </div>
            <div className=' mx-auto'>
                <CreateForm />
            </div>
        </div>
    );
}

export default Create;