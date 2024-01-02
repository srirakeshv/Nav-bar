import React from "react";
import { NavLink } from 'react-router-dom'
import './index.css'

const Navbar=()=>{
    return(
        <header>
            <nav>
                <div className="logo"><NavLink to='/'>LoGo</NavLink></div>
                <ul>
                    <li>
                        <NavLink to='/' end>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about'>About</NavLink>
                    </li>
                    <li>
                        <NavLink to='/services'>Services</NavLink>
                    </li>
                </ul>
            </nav>
            <div className="moto">
                <h1>Company Moto</h1>
            </div>
        </header>
    )
}

export const Footer=()=>{
    return(
        <footer>
            <div className="top">
                <div className="logo">LoGo</div>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                </ul>
            </div>
            <div className="copywrite"><i class="fa-regular fa-copyright"></i>Copyright</div>
        </footer>
    )
}

export default Navbar