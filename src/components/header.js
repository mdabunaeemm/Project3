import { useEffect, useRef, useState } from 'react';
import logo from '../assetes/img/logo.png'
import '../css/header.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import {
    NavLink,
  } from "react-router-dom";




export default function Header(){
    let [bars, setBars]=useState("fas fa-xmark");
    let [showHidebtn, setShowHidebtn]=useState("none")
    let showHide = useRef(showHidebtn)
    useEffect(()=>{
        console.log(showHide.current.style.display="flex")
    },[])
    function barshand(){
        if(bars==="fas fa-bars"){
            setBars("fas fa-xmark");
            setShowHidebtn(showHide.current.style.display="flex")
        }else{
            setBars("fas fa-bars")
            setShowHidebtn(showHide.current.style.display="none")
        }
    }
    return(
        <header>
        <div className="header">
            <div className="img-ul">
                <img className="logo"  src={logo} alt="logo"></img>
                <ul className='showHide' ref={showHide}>
                    
                        <li>
                            <NavLink
                            to="./about">About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                            to="./portfolio">Portfolio
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                            to="./skills">Skills
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                            to="./blog">Blog
                            </NavLink>
                        </li>
                    
                </ul>
            </div>
            <div onClick={barshand} className={bars}></div>
            <span className="contact-btn">
                <NavLink 
                to="/contact" 
                style={{color:"white"}}
                >
                    Contact Us
                
                </NavLink>
            </span>
        </div>
    </header>
    );
}