import React from 'react'
import { Input } from "@material-tailwind/react";
import {search} from 'ionicons/icons';

import { IonIcon } from '@ionic/react';
export default function Searchbar(props) {
  let handleKeyPress= (e)=> {
    // This is perfectly safe in react, it correctly detect the keys
    console.log(e.key)
    if(e.key === 'Enter'){
      props.handleSearchClick(e.target.value)
     }
   }
    
  return (
    <div className=" w-1/2 flex flex-row items-center mx-auto">

      <Input onChange={(e)=>{props.setSearch(e.target.value)}} onKeyDown={handleKeyPress.bind(this)}  label="Search" icon={<IonIcon icon={search}></IonIcon>} />
    </div>
  )
}
