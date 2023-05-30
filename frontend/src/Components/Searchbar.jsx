import React from 'react'
import { Input } from "@material-tailwind/react";
import {search} from 'ionicons/icons';

import { IonIcon } from '@ionic/react';
export default function Searchbar() {
    
  return (
    <div className="w-72 flex flex-row items-center mx-auto">
      <div className="m-5"><IonIcon icon={search}></IonIcon></div>
      <Input size='' label="Search" />
    </div>
  )
}
