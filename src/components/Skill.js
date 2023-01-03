// import React from 'react';
// import { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import buf from '../images/buf.png'


// const Contact = () => {

//     const [showLinks, setShowLinks] = useState(false);

//     const handleShowLinks = () => {
//         setShowLinks(!showLinks)
//     }

//     return (
//         <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
//             {/* <div className='navbar__logo'>Logo</div> */}
//             <img className='lion' src={buf} alt="imgfond" ></img>
//             {/* <img className='' src={prenom1} alt="imgfond" ></img> */}

//             <ul className='navbar__links'>
//                 <li ><NavLink className='navbar__item slideInDown-1 nav-link navbar__link' to="/Contact">
//                     Home
//                 </NavLink></li>
//                 <li ><NavLink className='navbar__item slideInDown-1 nav-link navbar__link' to="/About">
//                     About
//                 </NavLink></li>
//                 <li ><NavLink className='navbar__item slideInDown-1 nav-link navbar__link' to="/Home">
//                     Skill
//                 </NavLink></li>
//                 <li>
//                     <div class="btn">From Top</div>
//                 </li>

//                 {/* <li className='navbar__item  slideInDown-5 nav-link'>
//                         <a href='/' className='navbar__link'>Accueil</a>
//                     </li> */}
//             </ul>
//             <button className='navbar__burger' onClick={handleShowLinks}>
//                 <span className='burger-bar'></span>
//             </button>
//         </nav>
//     );
// };

// export default Contact;

import React from 'react';
import Nav from './Nav';

const Skill = () => {
    return (
        <div>
            <Nav />
            Skill
        </div>
    );
};

export default Skill;