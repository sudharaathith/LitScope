import React, { useEffect, useState } from 'react';
import NavBar from '../../Components/NavBar';
import DomainCards from '../../Components/DomainCards';
import axios from 'axios';
import card from '@material-tailwind/react/theme/components/card';



function Domain(props) {
  let [res, setRes] = useState([]);
  let [cards, setCards] = useState([]);
  useEffect(()=>{
    axios.get('http://127.0.0.1:8000/api/domain/domains/').then((res)=>{
    setRes(res.data);
    console.log(res)
  }
  )
  },[]);

  useEffect(()=>{
    let temp = [];
    res.map(card =>{
      temp.push(<DomainCards fid={card.id} text={card.name} icon={card.icon} />)
    })
    temp.push(<DomainCards className=" bg-gradient-to-tr from-blue-gray-100 to-white" text="Add New Domain" icon="https://cdn.onlinewebfonts.com/svg/img_129060.png" />)
    setCards(temp);
  },[res])
 
  console.log(res)
    return (
        <div>
            <NavBar />
            <div className=' my-40 text-center text-4xl font-[Poppin]'>Domains</div>
            <div className='grid sm:grid-cols-2 justify-items-center gap-y-8 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 m-10 '>
            {
             cards
            }
            </div>
        </div>
    );
}

export default Domain;