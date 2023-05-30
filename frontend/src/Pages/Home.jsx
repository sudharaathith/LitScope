import React, { Component, useState } from "react";
import NavBar from "../Components/NavBar";
import Searchbar from "../Components/Searchbar";
import Searchresult from "../Components/Searchresult";
import ReactLogo from "../Static/Asset 1.svg";
import {Typography} from "@material-tailwind/react";

function Home(props) {
    let a = "slkjdf skjfdlk sdfjok sdlkfj;la sldjkfo;a as;dklfj sajd; aslkjdf; aslkfj aslfkj as;ljksa sdf sdfkljsalk;;as fd afn;kjasdfkljsa slkjdf skjfdlk sdfjok sdlkfj;la sldjkfo;a as;dklfj sajd; aslkjdf; aslkfj aslfkj as;ljksa sdf sdfkljsalk;;as fd afn;kjasdfkljsaslkjdf skjfdlk sdfjok sdlkfj;la sldjkfo;a as;dklfj sajd; aslkjdf; aslkfj aslfkj as;ljksa sdf sdfkljsalk;;as fd afn;kjasdfkljsaslkjdf skjfdlk sdfjok sdlkfj;la sldjkfo;a as;dklfj sajd; aslkjdf; aslkfj aslfkj as;ljksa sdf sdfkljsalk;;as fd afn;kjasdfkljsaslkjdf skjfdlk sdfjok sdlkfj;la sldjkfo;a as;dklfj sajd; aslkjdf; aslkfj aslfkj as;ljksa sdf sdfkljsalk;;as fd afn;kjasdfkljsaslkjdf skjfdlk sdfjok sdlkfj;la sldjkfo;a as;dklfj sajd; aslkjdf; aslkfj aslfkj as;ljksa sdf sdfkljsalk;;as fd afn;kjasdfkljsav slkjdf skjfdlk sdfjok sdlkfj;la sldjkfo;a as;dklfj sajd; aslkjdf; aslkfj aslfkj as;ljksa sdf sdfkljsalk;;as fd afn;kjasdfkljsa slkjdf skjfdlk sdfjok sdlkfj;la sldjkfo;a as;dklfj sajd; aslkjdf; aslkfj aslfkj as;ljksa sdf sdfkljsalk;;as fd afn;kjasdfkljsa slkjdf skjfdlk sdfjok sdlkfj;la sldjkfo;a as;dklfj sajd; aslkjdf; aslkfj aslfkj as;ljksa sdf sdfkljsalk;;as fd afn;kjasdfkljsaslkjdf skjfdlk sdfjok sdlkfj;la sldjkfo;a as;dklfj sajd; aslkjdf; aslkfj aslfkj as;ljksa sdf sdfkljsalk;;as fd afn;kjasdfkljsa "
    const [summrize, setSummrize] = useState(a+a+a+a+a+a);
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
        <div className=" xl:w-[40%] w-1/2">
        <Searchresult />
        </div>
        <div className="xl:w-[60%] bg-gray-50 m-5 h-[75vh] w-1/2 shadow-inner rounded-xl p-9 overflow-y-scroll">
        {(summrize)?<Typography>{summrize}</Typography>:<img className=" h-full " src={ReactLogo} alt="React Logo" />}
        </div>
      </div>
    </div>
  );
}

export default Home;
