import React, { Component } from 'react'
import NavBar from '../Components/NavBar';
import Searchbar from '../Components/Searchbar';
import Searchresult from '../Components/Searchresult';

function Home(props) {
    return (
        <div>
         <NavBar />  
         <br/>
         <br/>
         <br/>
         <br/>
         <div><Searchbar/></div>
         <br/>
         <div><Searchresult/></div>
        </div>
    );
}

export default Home;
