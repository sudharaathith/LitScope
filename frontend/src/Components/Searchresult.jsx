import React from 'react'
import { Typography, Chip } from "@material-tailwind/react";
function Searchresult(props) {
  let colors = ["blue","red", "green",  "amber", "pink", "indigo", "purple", "teal", "cyan"]
  return (
    <div className='   p-5 rounded-2xl shadow-xl  m-5 flex flex-col h-[75vh] '>
      <div>
        {props.keywords&&props.keywords.map((val)=>(<Chip className=' m-1' color={colors[val.length%9] } value={val} />))}
        </div>
        <div className='  shadow-inner rounded-xl flex flex-col overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-gray-100 my-3'>
          {props.res&&props.res.map((i)=>(<Option setCurrurl={props.setCurrurl} value={i[0]} href={i[1]} />))}
        </div>

     </div>

  )
}


 function Option(props) {
  return (
    <div className=' w-full h-fit text-center p-3 shadow-sm cursor-pointer hover:animate-pulse  rounded-2xl' onClick={(e)=>{props.setCurrurl(props.href)}}>{props.value}</div>
  )
}


export default Searchresult