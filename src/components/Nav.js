import React from 'react';
import './nav.css'
import { useState } from 'react';
import buf from '../images/buf.png'
import { NavLink } from 'react-router-dom';

// import prenom1 from '../images/prenom1.png'



const Nav = () => {

    const [showLinks, setShowLinks] = useState(false);

    const handleShowLinks = () => {
        setShowLinks(!showLinks)
    }

    // const hideShowLinks = () =>{
    //     setShowLinks
    // } 

    return (
        <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
            {/* <div className='navbar__logo'>Logo</div> */}
            <img className='lion' src={buf} alt="imgfond" ></img>
            {/* <img className='' src={prenom1} alt="imgfond" ></img> */}

            <ul className='navbar__links'>
                {/* <li > <NavLink className='navbar__item slideInDown-1 nav-link navbar__link' to="/Home">
                    Home
                </NavLink></li> */}
                <li ><a href='#home' className='navbar__item slideInDown-1 nav-link navbar__link' onClick={handleShowLinks}>Home</a>
                </li>
                <li ><a href='#propos' className='navbar__item slideInDown-1 nav-link navbar__link' onClick={handleShowLinks}>About</a>
                </li>
                <li ><a href='#skills' className='navbar__item slideInDown-1 nav-link navbar__link' onClick={handleShowLinks}>Skill </a>
                </li>
                <li ><a href='#work' className='navbar__item slideInDown-1 nav-link navbar__link' onClick={handleShowLinks}>Work </a>
                </li>
                <li>
                    <a href='#contact'><div className="btn" onClick={handleShowLinks}>Contact</div></a>
                </li>
            </ul>


            {/* <li className='navbar__item  slideInDown-5 nav-link'>
                    <a href='/' className='navbar__link'>Accueil</a>
                </li>
            <ul className='navbar__links'>
                <li ><a href='#home' className='navbar__item slideInDown-1 nav-link navbar__link'> Home </a>
                </li>
                <li ><a href='#propos' className='navbar__item slideInDown-1 nav-link navbar__link'>About</a>
                </li>
                <li ><a href='#skills' className='navbar__item slideInDown-1 nav-link navbar__link'>Skill </a>
                </li>
                <li ><a href='#work' className='navbar__item slideInDown-1 nav-link navbar__link'>Work </a>
                </li>
                <li>
                    <div className="btn">Contact</div>
                </li>
                {/* <li className='navbar__item  slideInDown-5 nav-link'>
                    <a href='/' className='navbar__link'>Accueil</a>
                </li> */}
            <button className='navbar__burger' onClick={handleShowLinks}>
                <span className='burger-bar'></span>
            </button>

        </nav>
    );
};

export default Nav;


{/* <ul>
<li ><NavLink className='navbar__item slideInDown-1 nav-link navbar__link' to="/Home">
Home
</NavLink></li>
<li ><NavLink className='navbar__item slideInDown-1 nav-link navbar__link' to="">
About
</NavLink></li>
<li ><NavLink className='navbar__item slideInDown-1 nav-link navbar__link' to="/Skill">
Skill
</NavLink></li>
<li>
<div class="btn">Contact</div>
</li> 
</ul> */}