import './App.css';
import FinalPreview from './preview';
import Basic from './components/Basic';
import Contact from './components/contact';
import Education from './components/education';
import Skill from './components/skill';
import Projects from './components/projects';
import Experience from './components/experience';
import { HashRouter, Routes, Route, Link } from "react-router-dom";



function App() {
  return (
    <>
    
    {/* <FinalPreview/> */}
   
    <HashRouter>
      {/* <LeftNav/> */}
      <Routes>
        <Route exact path="/basic" element={<Basic/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
        <Route exact path="/education" element={<Education/>}/>
        <Route exact path="/experience" element={<Experience/>}/>
        <Route exact path="/project" element={<Projects/>}/>
        <Route exact path="/skill" element={<Skill/>}/>
        <Route exact path="/" element={<FinalPreview/>}/>
      </Routes>
    </HashRouter>
   
    </>
  );
}

export default App;
