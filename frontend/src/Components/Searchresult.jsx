import React from 'react'
import { Typography, Chip } from "@material-tailwind/react";
function Searchresult() {
  let colors = ["blue","red", "green",  "amber", "pink", "indigo", "purple", "teal", "cyan"]
  return (
    <div className='   p-5 rounded-2xl shadow-xl  m-5 flex flex-col h-[75vh] '>
      <div>
        <Chip className=' m-1' color={colors[Math.floor(Math.random() * 9)] } value={"summa dhaan"} />
        <Chip className=' m-1' color={colors[Math.floor(Math.random() * 9)] } value={"summa"} />
        <Chip className=' m-1' color={colors[Math.floor(Math.random() * 9)] } value={"summa"} />
        <Chip className=' m-1' color={colors[Math.floor(Math.random() * 9)] } value={"summa"} />
        <Chip className=' m-1' color={colors[Math.floor(Math.random() * 9)] } value={"summa"} />
        <Chip className=' m-1' color={colors[Math.floor(Math.random() * 9)] } value={"summa"} />

        <Chip className=' m-1' color={colors[Math.floor(Math.random() * 9)] } value={"summa"} /></div>
        <div className='  shadow-inner rounded-xl flex flex-col overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-gray-100 my-3'>
          <Option />
          <Option />
          <Option />
          <Option />
          <Option />
          <Option />
          <Option />
          <Option />
          <Option />
          <Option />
          <Option />
          <Option />
          <Option />
          <Option />
          <Option />
          <Option />
        </div>

     </div>

  )
}


 function Option() {
  return (
    <div className=' w-full h-fit text-center p-3 shadow-sm cursor-pointer hover:animate-pulse  rounded-2xl'>flskjdfl sdlfjlka sdlkfjl asfkj;las fslkjfl; saldjf;l sldfjl safl;j jlskdfjl lskjflk saldfkj saldfj;l salfkjl;a sdljjl;</div>
  )
}


export default Searchresult