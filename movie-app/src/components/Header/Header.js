import React from 'react'
import {Link} from "react-router-dom"
import user from "../../images/prof.png"
import "./Header.scss"
export default function Header() {
  return (
    <>
    <div className="header">
    <Link to="/"> <div className="logo">Movie App</div></Link>

<div className="user-imag">
  <img src={user}  alt="user" />
</div>
    </div>

    
    
    
    </>
  )
}
