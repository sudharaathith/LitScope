import React, { Component, useEffect, useState } from "react";
import NavBar from "../Components/NavBar";
import Searchbar from "../Components/Searchbar";
import Searchresult from "../Components/Searchresult";
import ReactLogo from "../Static/Asset 1.svg";
import {Typography} from "@material-tailwind/react";
import axios from "axios";

function Home(props) {
    const [summrize, setSummrize] = useState(null);
    const [search, setSearch] = useState("");
    const [keywords, setKeywords] = useState([]);
    const [res, setRes] = useState(null);

    useEffect(()=>{
      
      let r = keywords;
      let a = "";
      r.map((i)=>{
        a += i + ' '
      })
      r = [...r, a, search]
      let data = {
        "value": r ,
      };

      const headers = {
        "Content-Type":
          "application/x-www-form-urlencoded;charset=UTF-8",
      };
      axios
        .post("http://127.0.0.1:8000/api/domain/search/", data, headers)
        .then((data)=>{
          setRes(data.data)
        })
    }, [keywords])
  return (
    <div className="h-screen overflow-hidden">
      <NavBar />
      <br />
      <br />
      <br />
      <br />
      <div>
        <Searchbar setSearch={setSearch} handleSearchClick={(val)=>{
           let data = {
            "value": val,
          };

          const headers = {
            "Content-Type":
              "application/x-www-form-urlencoded;charset=UTF-8",
          };
          axios
            .post("http://127.0.0.1:8000/api/domain/keywords/", data, headers)
            .then((data)=>{
              setKeywords(data.data)
            })
        }} />
      </div>
      <br />
      <div className="flex flex-row h-full">
        <div className=" xl:w-[40%] w-1/2">
        <Searchresult res={res} keywords={keywords} />
        </div>
        <div className="xl:w-[60%] bg-gray-50 m-5 h-[75vh] w-1/2 shadow-inner rounded-xl p-9 overflow-y-scroll">
        {(summrize)?<Typography>{summrize}</Typography>:<img className=" h-full " src={ReactLogo} alt="React Logo" />}
        </div>
      </div>
    </div>
  );
}

export default Home;
