import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./Slider.css"
import github from '../images/github.png'
import trello from '../images/trello.png'
import sass from '../images/sass.png'




const Slider = () => {


    return (
        <Carousel className='taille'>

            <div className='container-slide'><img src={github} alt='github' /></div>
            <div className='container-slide'><img src={trello} alt='trello' /></div>
            <div className='container-slide'><img src={sass} alt='sass' /></div>
            {/* <a href='https://raphael-honigstein-portfolio.web.app/'>  <div className='container-slide'><img src={github} alt='github' /></div></a>
            <a href='https://raphael-honigstein-portfolio.web.app/'>  <div className='container-slide'><img src={trello} alt='trello' /></div></a>
            <a href='https://raphael-honigstein-portfolio.web.app/'>    <div className='container-slide'><img src={sass} alt='sass' /></div></a> */}
        </Carousel>
    );
};

export default Slider;

// import React from 'react'
// import { Slide } from 'react-slideshow-image'
// import github from '../images/github.png'
// import trello from '../images/trello.png'
// import sass from '../images/sass.png'
// // import "./Slider.css"





// const Slideshow = () => {
//     return (
//         <div className='container-slide'>
//             <Slide >
//                 <div className='each-slide'>
//                     <div>
//                         <img src={github} alt='github' />
//                     </div>
//                 </div>
//                 <div className='each-slide'>
//                     <div>
//                         <img src={trello} alt='trello' />
//                     </div>
//                 </div>
//                 <div className='each-slide'>
//                     <div>
//                         <img src={sass} alt='sass' />
//                     </div>
//                 </div>
//             </Slide>
//         </div>

//     )
// }

// export default Slideshow