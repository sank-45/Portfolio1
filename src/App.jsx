
// import Hero from "./Portfolio/Component/Hero/Hero"
// import Navbar from "./Portfolio/Component/Navbar/NavBar"
// import About from "./Portfolio/Containers/About/About"
// import Contact from "./Portfolio/Containers/Contact/Contact"
// import Projects from "./Portfolio/Containers/Projects/Project"
// import Skills from "./Portfolio/Containers/Skill/Skills"


// function App() {
  

//   return (
//     <>
//     <Navbar/>
//     <Hero/>
//     <About/>
//     <Skills/>
//     <Projects/>
//     <Contact/>
//     </>
//   )
// }

// export default App

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Portfolio/Component/Navbar/NavBar';
import Home from './Portfolio/Component/Hero/Hero';
import About from './Portfolio/Containers/About/About';
import Projects from './Portfolio/Containers/Projects/Project';
import Contact from './Portfolio/Containers/Contact/Contact';
import Skills from './Portfolio/Containers/Skill/Skills';
import Footer from './Portfolio/Component/Footer/Footer';
// import Disclaimer from './Components/Disclaimer/Disclaimer';

function App() {
    // console.log("App component rendered"); // Debugging log
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path='/skills' element={<Skills/>}/>
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                {/* <Route path="/disclaimer" element={<Disclaimer />} /> */}
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
