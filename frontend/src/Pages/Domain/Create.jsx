import React from 'react';
import NavBar from '../../Components/NavBar';
import Form from 'react-bootstrap/Form';
import InputBox from '../../Components/InputBox';

function Create(props) {
    return (
        <div>
            <NavBar/>
            <div className='mt-[100px] text-4xl ml-10 font-[Poppins] text-gray-800 cursor-default'>
                Create Domain
            </div>
            <div>
            
            <InputBox />
            </div>
        </div>
    );
}

export default Create;