import React, { useState } from 'react';
import { Button } from '@material-tailwind/react';

function Input(props){
    return (
        <div  className='resize-none flex-grow'>
            <input type="text" className='resize-none flex-grow' ></input>
        </div>
    )
}

function Route(props) {
    let [front, setFront] = useState([]);
    let [back, setBack] = useState([]);

    let addFrount = () => {
        setFront(front.concat(<Input className=' w-fit min-w-0' />))
    };
    return (
        <div className=' rounded-xl flex flex-row border '>
            {front}
            <Button variant="text" className=' rounded-none rounded-l-xl' onClick={addFrount}>+</Button>
            <div className='p-3 border'>
                {"//<<for>>//"}
            </div>
            <Button variant="text" className=' rounded-none rounded-r-xl'>+</Button>
        </div>
    );
}

export default Route;