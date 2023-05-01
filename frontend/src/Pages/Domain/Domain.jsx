import React, { useEffect } from 'react';
import NavBar from '../../Components/NavBar';
import DomainCards from '../../Components/DomainCards';
import axios from 'axios';



function Domain(props) {
  axios.get('http://127.0.0.1:8000/api/domain/domains/').then((res)=>{
    console.log(res.data)
  }
  )

    return (
        <div>
            <NavBar />
            <div className=' my-40 text-center text-4xl font-[Poppin]'>Domains</div>
            <div className='grid sm:grid-cols-2 justify-items-center gap-y-8 md:grid-cols-3 lg:grid-cols-4 m-10 '>
            <DomainCards 
            className="w-full mx-auto"
              text="summa.io"
              icon='https://media.geeksforgeeks.org/gfg-gg-logo.svg'
            />
            <DomainCards 
              text="summa.io"
              icon='https://media.geeksforgeeks.org/gfg-gg-logo.svg'
            />
            <DomainCards 
              text="summa.io"
              icon='https://media.geeksforgeeks.org/gfg-gg-logo.svg'
            />
            <DomainCards 
              text="summa.io"
              icon='https://media.geeksforgeeks.org/gfg-gg-logo.svg'
            />
            <DomainCards 
              text="summa.io"
              icon='https://media.geeksforgeeks.org/gfg-gg-logo.svg'
            />
            </div>
        </div>
    );
}

export default Domain;