import React, { Component } from "react";
import NavBar from "../Components/NavBar";
import Searchbar from "../Components/Searchbar";
import Searchresult from "../Components/Searchresult";

function Home(props) {
  return (
    <div className="h-screen overflow-hidden">
      <NavBar />
      <br />
      <br />
      <br />
      <br />
      <div>
        <Searchbar />
      </div>
      <br />
      <div className="flex flex-row h-full">
        <div className=" w-1/2">
        <Searchresult />
        </div>
      </div>
    </div>
  );
}

export default Home;
