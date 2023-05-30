import React, { Component } from 'react'
import NavBar from '../Components/NavBar';
import Searchbar from '../Components/Searchbar';

function Home(props) {
    return (
        <div>
         <NavBar />  
         <br/>
         <br/>
         <br/>
         <br/>
         <div><Searchbar /></div>
        </div>
    );
}

export default Home;
