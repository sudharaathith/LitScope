import React from 'react'
import { Input } from "@material-tailwind/react";
import {search} from 'ionicons/icons';

import { IonIcon } from '@ionic/react';
export default function Searchbar() {
    
  return (
    <div className=" w-3/4 flex flex-row items-center mx-auto">

      <Input  label="Search" icon={<IonIcon icon={search}></IonIcon>} />
    </div>
  )
}
