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
      <Routes>
         
            <Route path="/" element={<Home />} />
        <Route path="/movie/:imdbID" element={<Moviesdetail/>} />
        <Route path="*" element={<Pagenotfound/>} />
        </Routes>
        <Footer />
       
    </BrowserRouter>
    </div>
  );
}

export default App;