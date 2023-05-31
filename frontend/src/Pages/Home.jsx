import React, { Component, useEffect, useState } from "react";
import NavBar from "../Components/NavBar";
import Searchbar from "../Components/Searchbar";
import Searchresult from "../Components/Searchresult";
import ReactLogo from "../Static/Asset 1.svg";
import {Typography, Button} from "@material-tailwind/react";
import axios from "axios";

function Home(props) {
    const [summrize, setSummrize] = useState(null);
    const [search, setSearch] = useState("");
    const [keywords, setKeywords] = useState([]);
    const [res, setRes] = useState(null);
    const [currurl, setCurrurl] = useState(null);
    const [currtitle, setCurrtitle]= useState(null);

    useEffect(()=>{
      

      let a = "";
      keywords.map((i)=>{
        a += i + ' '
      })
      let r = [search,a, ...keywords]
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

    useEffect(()=>{
      let data = {
        "url": currurl ,
      };

      const headers = {
        "Content-Type":
          "application/x-www-form-urlencoded;charset=UTF-8",
      };
      currurl&&axios
        .post("http://127.0.0.1:8000/api/domain/summarize/", data, headers)
        .then((data)=>{
          setSummrize(data.data)
        })
    },[currurl]);
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
        <Searchresult setCurrtitle={setCurrtitle} setCurrurl={setCurrurl} res={res} keywords={keywords} />
        </div>
        <div className="xl:w-[60%] bg-gray-50 m-5 h-[75vh] w-1/2 shadow-inner rounded-xl p-9 overflow-y-scroll">
        {(summrize)?(<><Typography variant="h3">{currtitle}</Typography><Typography>{summrize}<a href={currurl}><Button variant="text" color="red">Visit website</Button></a></Typography></>):<img className=" h-full " src={ReactLogo} alt="React Logo" />}
        </div>
      </div>
    </div>
  );
}

export default Home;
