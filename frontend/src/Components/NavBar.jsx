import React, { useState } from 'react';
import { IonIcon } from '@ionic/react';
import {logoIonic, menu, close } from 'ionicons/icons';
import { Link } from 'react-router-dom';



function NavBar(props) {
    let Links = [
        {name:"Home", link:"/"},
        {name:"Domain", link:"/domain"},
        {name:"summa", link:"/"},
    ]
    let [open, setOpen] = useState(true);
    return (
        <div className=' shadow-md w-full fixed top-0 left-0'>
           <div className='md:flex items-center justify-between bg-indigo-800 py-4 md:px-10 px-7 text-white'>
                <div className='font-bold text-2x1 cursor-pointer flex items-center font-[Poppins] text-gray-200'>
                    <span className='text-3x1 text-red-600 mr-1 pt-2'>
                    <IonIcon icon={logoIonic}></IonIcon>
                    </span>
                    LitScope
                </div>
                <div onClick={()=>setOpen(!open)}
                className='text-3x1 absolute right-8 top-6 cursor-pointer md:hidden'>
                <IonIcon icon={open?menu:close}></IonIcon>
                </div>
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-indigo-900 md:bg-indigo-800 md:z-auto z-[-1] w-full left-0
                md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${!open ? 'top-19': 'top-[-490px]'}`}>
                    {
                        Links.map((Link) =>(
                            <li key={Link.name} className='md:ml-8 md:my-0 my-7' >
                                <a href={Link.link} className='md:hover:text-gray-400'>{Link.name}</a>
                            </li>
                        ))
                    }
                </ul>
           </div>
        </div>
    );
}

export default NavBar;