import React, { useEffect, useState } from 'react';
import { Button, Menu, MenuHandler, MenuItem, MenuList } from '@material-tailwind/react';

function InputFront(props){
    let [text, setText] = useState(props.text);

    
    return (
        <div  className={`' flex w-fit resize-none flex-grow  border-r ${(props.index===0)?"rounded-l-xl":""}'`}>
            <input type="text" style={{width:`${text.length*8}px`}} onChange={(e) => {
                setText(e.target.value);
                props.onChange(e.target.value,props.index)
            }} className={` min-w-[30px] text-center rounded-none ${(props.index===0)?"rounded-l-xl":""}`} ></input>
        </div>
    )
}

function InputBack(props){
    let [text, setText] = useState(props.text);
    return (
        <div  className={` flex w-fit resize-none flex-grow  `}>
            <input type="text"  style={{width:`${text.length*8}px`}} onChange={(e) => {
                setText(e.target.value);
                props.onChange(e.target.value,props.index)
            }} className={` min-w-[30px] text-center border-r rounded-none `} ></input>
        </div>
    )
}

function WebRoute(props) {
    let [front, setFront] = useState([]);
    let [back, setBack] = useState([]);
    let [fronttext, setFronttext] = useState([]);
    let [backtext, setBacktext] = useState([]);
    let [intext, setIntext] = useState("");
    let [isgone, setIsgone] = useState(true);

    

    let updatefront= (str, index)=>{
        let temp = fronttext
        temp[index] = str;
        setFronttext(temp);
        update()
    }

    let updateback= (str, index)=>{
        let temp = backtext;
        temp[index] = str;
        setBacktext(temp);
        update()
    }

    let update = () =>{
        props.onChange(fronttext.concat("//<<for>>//").concat(backtext).concat(intext))
    }


    
    useEffect(update,[intext])

    

    let addFrount = (text="") => {
        setFront(front.concat(<InputFront text={text} key={front.length} index = {front.length} onChange={updatefront} className={` w-fit min-w-0 ${(front.length===0)?"rounded-l-xl":""}`} />))
        setFronttext(fronttext.concat(""));
    };

    let addBack = (text="") => {
        setBack(back.concat(<InputBack text={text} key={back.length} index = {back.length} onChange={updateback} className={` w-fit min-w-0`} />))
        setBacktext(backtext.concat(""));
    };

    // if((props.startData[-1] === '//<text>>//' || props.startData[-1] === '//<<href>>//')){
    //     setIsgone(false);
    //     let isfrount = true;
    //    setIntext( props.startData.pop())
    //     props.startData.map((data)=>{
    //         if(data==="//<<for>>//"){
    //             isfrount = false
    //         }else if(isfrount){
    //             addFrount(data);
    //         }else{
    //             addBack(data);
    //         }
    //     })
    // }
    return (
        <div className=' rounded-xl flex flex-row border '>
            {front}
            <Button variant="text" className={` rounded-none ${(front.length===0)?"rounded-l-xl":""}`} onClick={addFrount}>+</Button>
            <div className='p-3 border'>
                {"//<<for>>//"}
            </div>
            {back}
            <Button variant="text" className=' rounded-none' onClick={addBack}>+</Button>
            <Menu>
      <MenuHandler>
        <Button className=' rounded-none rounded-r-xl' variant="gradient">{(intext==="")?"Select Element":intext}</Button>
      </MenuHandler>
      <MenuList>
        <MenuItem value="//<<href>>//"  onClick={(e)=>{
                setIntext(e.target.value)
                }
            }>Href</MenuItem>
        <MenuItem value="//<<text>>//" onClick={(e)=>{
                setIntext(e.target.value)
                }
            }>Text</MenuItem>
      </MenuList>
    </Menu>
        </div>
    );
}

export default WebRoute;