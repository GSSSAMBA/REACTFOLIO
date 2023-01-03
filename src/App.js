import './App.css';
import './components/Slider'
import Nav from './components/Nav';
// import Slider from './components/Slider'
import { BrowserRouter, Routes, Route, } from "react-router-dom";
// import Home from './Pages/Home';
import Skill from './components/Skill.js';
import About from './components/About.js';
import Home from './components/Home';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/skill" element={<Skill />} />
      </Routes>
      {/* <Slider /> */}
    </BrowserRouter >

  );
}

export default App;
