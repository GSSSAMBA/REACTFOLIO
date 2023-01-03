import React from 'react';
import Nav from './Nav';
import Slider from './Slider'
// import Slide from './Slide';
import './home.css'
import cloud from '../images/cloud.png'
import react from '../images/react.png'
import html from '../images/html.png'
import css from '../images/css.png'
import javascript from '../images/javascript.png'
import node from '../images/node.png'
import Mongodb from '../images/Mongodb.png'
import github from '../images/github.png'
import trello from '../images/trello.png'
import sass from '../images/sass.png'
import netflix from '../images/netflix.png'
import social2 from '../images/social2.png'
import invader2 from '../images/invader2.png'
import KANAP1 from '../images/KANAP1.png'
import omf from '../images/omf.png'
import booki1 from '../images/booki1.png'
import piment1 from '../images/piment1.png'
import map1 from '../images/map1.png'
import contactpic from '../images/contactpic.png'
import phone2 from '../images/phone2.png'
import mail1 from '../images/mail1.png'

const Home = () => {
    return (
        <div>
            <Nav />
            <section id='home' className='home' >
                <div className='titre'>
                    <img className='cloud' src={cloud} alt="imgfond" ></img>
                </div>
                <div className='global1'>
                    <div className='global'>
                        <div id='about' className='test1'><p>Hi my name is</p></div>
                        <div className='test2'>Gauthier Samba</div>
                        <div className='test3'>I'm a Full Stack </div>
                        <div className='test4'>Developer </div>
                        <div>
                            <p className='loc'>French Web Developer</p>  <p className='loc'>   <i class="fa-solid fa-location-dot"></i> &nbsp;Paris, Vannes Openclassroom School</p>
                        </div>
                    </div>
                    <div><a href='#propos'><button className='view'>View Work  <i class="fa-solid fa-arrow-right"></i></button></a></div>

                </div>
            </section >
            <section> <a href='https://www.linkedin.com/in/gauthier-samba-seale-b6286b247/?originalSubdomain=fr'>  <div className='social'>LinkedIn <i class="fa-brands fa-linkedin"></i></div></a>
                <a href='https://github.com/GSSSAMBA'>  <div className='social1'>Github <i class="fa-brands fa-github"></i></div></a>
                <a href="mailto:gauthieredc@gmail.com">   <div className='social2'>E-mail <i class="fa-regular fa-envelope"></i></div></a></section>
            <section id='propos' className='aboutme'>
                {/* <p className='about-title'>About</p> */}

                <div className='about1'>
                    <div className='aboutdetails'><span className='underline'>About</span></div>
                    <div className='aboutdetails1'></div>
                </div>
                <div className='about1'>
                    <div className='aboutdetails3'>Welcome, I'm Gauthier<br></br> Samba. Nice to meet <br></br> you. </div>
                    <div className='aboutdetails4'>Passionate about computers and screens, I decided to<br></br> gather all these tools to make it my job. Travel, video <br></br> games, animals and sport are part of my life.</div>
                </div>

            </section>
            <section className='global-container'>
                <section id='skills' className='skills'>
                    <div className='skills-title'><p>SKILL</p></div>

                    <div className='skills-container'>
                        <div className='skilldiv'><img className='imgskill' src={html} alt="imgfond" ></img>
                            <p>HTML 5</p>
                        </div>
                        <div className='skilldiv'><img className='imgskill' src={css} alt="imgfond" ></img>
                            <p>CSS 3</p>
                        </div>
                        <div className='skilldiv'><img className='imgskill' src={javascript} alt="imgfond" ></img>
                            <p>Javascript</p>
                        </div>

                    </div>
                    <div className='skills-container'>

                        <div className='skilldiv'><img className='imgskill' src={node} alt="imgfond" ></img>
                            <p>NodeJs</p>
                        </div>
                        <div className='skilldiv'><img className='imgskill' src={react} alt="imgfond" ></img>
                            <p>ReactJs</p>
                        </div>
                        <div className='skilldiv'><img className='imgskill' src={Mongodb} alt="imgfond" ></img>
                            <p>MongoDB</p>
                        </div>

                    </div>
                    <div className='skills-container'>

                        <div className='skilldiv'><img className='imgskill' src={github} alt="imgfond" ></img>
                            <p>GitHub</p>
                        </div>
                        <div className='skilldiv'><img className='imgskill' src={trello} alt="imgfond" ></img>
                            <p>Trello</p>
                        </div>
                        <div id='work' className='skilldiv'><img className='imgskill' src={sass} alt="imgfond" ></img>
                            <p>Sass</p>
                        </div>
                    </div>
                </section>
            </section>
            <section id='skills' className='skills'>
                <div className='skills-title'><p className='project'>WORK</p></div>

                <div className='skills-container'>
                    {/* <div id='work' className='skills-container'> */}
                    <div className='skilldiv'><a href='https://gsssamba.github.io/FRONT-NETFLIX-v1/'><img className='imgskill1' src={netflix} alt="imgfond" ></img>
                        <p> </p></a>
                    </div>
                    {/* <div className='skilldiv'><img className='imgskill1' src={social2} alt="imgfond" ></img>
                        <p> </p>
                    </div> */}
                    <div className='skilldiv'><a href='https://bookiii.netlify.app/'><img className='imgskill1' src={booki1} alt="imgfond" ></img>
                        <p></p></a>
                    </div>
                    <div className='skilldiv'><a href='http://invader-gss.tk/'><img className='imgskill1 invader' src={invader2} alt="imgfond" ></img>
                        <p></p></a>
                    </div>

                </div>
                <div className='skills-container'>


                    <div className='skilldiv'><a href='https://gsssamba.github.io/FLAG-EX/'><img className='imgskill1' src={map1} alt="imgfond" ></img>
                        <p></p></a>
                    </div>
                    <div className='skilldiv'><a href='https://0h-my-food.netlify.app/'><img className='imgskill1' src={omf} alt="imgfond" ></img>
                        <p></p></a>
                    </div>
                    {/* <div className='skilldivpim '><p className='parahidden'>Création d'un réseau social d'entreprise (C.R.U.D)</p><img className='imgskill1' src={social2} alt="imgfond" ></img>
                        <p> </p>
                    </div> */}

                </div>
                <div className='skills-container'>
                    <div className='skilldiv2 '>
                        <div className='skilldivpim '><p className='parahidden'>Création d'une API REST/Authentification Utilisateur/Respect des normes RGPD/Cryptage MDP utilisateurs</p><img className='imgskill1' src={piment1} alt="imgfond" ></img>
                            <p></p>
                        </div>
                        <a href="mailto:gauthieredc@gmail.com"> <div className='essaibox'><p>Discutons-en ensemble</p></div></a>
                    </div>
                    <div className='skilldiv2 '>

                        <div className='skilldivpim  '><p className='parahidden'>Création d'un site E-COMMERCE d'achat de canapé en ligne</p><img className='imgskill1' src={KANAP1} alt="imgfond" ></img>
                            <p></p>
                        </div>
                        <a href="mailto:gauthieredc@gmail.com"> <div className='essaibox'><p>Discutons-en ensemble</p></div></a>

                    </div>
                    <div className='skilldiv2 '>

                        <div className='skilldivpim '><p className='parahidden'>Création d'un réseau social d'entreprise (C.R.U.D)</p><img className='imgskill1' src={social2} alt="imgfond" ></img>
                            <p> </p>
                        </div>
                        <a href="mailto:gauthieredc@gmail.com"> <div className='essaibox'><p>Discutons-en ensemble</p></div></a>

                    </div>
                </div>

                <div className='skills-container'>
                    <div className='contact'>
                        <button id='contact' className='btn-contact'>CONTACT</button>
                        <div className='contact2'>
                            <div className='contact3'>
                                <a className='num' href="tel:06.61.50.50.55" alt="phone-number">
                                    <img className='imgskill' src={phone2} alt="imgfond" ></img></a>
                                <p class="espace"><a className='mail' href="tel:06.61.50.50.55" alt="phone-number">
                                    06.61.56.50.55</a></p>
                            </div>
                            <div className='contact3'>
                                <a className='num' href="mailto:gauthieredc@gmail.com" alt="mail">
                                    <img className='imgskill' src={mail1} alt="imgfond" ></img></a>

                                <p class="espace"><a className='mail' href="mailto:gauthieredc@gmail.com" alt="mail">
                                    gauthieredc@gmail.com</a></p>                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </div >
    );
};

export default Home;