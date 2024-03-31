import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Video from "./assets/background.mp4";
import Login from "./component/Login";
import Signup from "./component/Signup";
import Start from "./Start";

function App() {
  return (
    <>
      <div className="background-video-container">
        <video autoPlay loop muted className="background-video">
          <source src={Video} type="video/mp4" />
        </video>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Start />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
