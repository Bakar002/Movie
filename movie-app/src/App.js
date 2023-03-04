import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Pagenotfound from "./components/Pagenotfound/Pagenotfound";
import Moviesdetail from "./components/Moviesdetail/Moviesdetail";
import "./App.scss";

function App() {
  return (
    <div className="app">
     <BrowserRouter>
     <Header/>
     <div className="container"style={{color:'white'}}>
      <Routes>
         
            <Route path="/" element={<Home />} />
        <Route path="/movie/:imdbID" element={<Moviesdetail/>} />
        <Route path="*" element={<Pagenotfound/>} />
        </Routes></div>
        <Footer />
       
    </BrowserRouter>
    </div>
  );
}

export default App;