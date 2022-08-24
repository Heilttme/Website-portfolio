import React, { useState } from 'react';
import { AppContextProvider } from './components/AppContext';
import Navigation from "./components/Navigation"
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './styles/index.css';
import {HashRouter as Router, Routes, Route} from "react-router-dom"


function App() {
  const [language, setLanguage] = useState(navigator.language || navigator.userLanguage)
  const [menuOpened, toggleMenu] = useState(false)
  

  return (
    <AppContextProvider value={{language, setLanguage}}>
      <Router>
        <div className="app">
            <div onClick={() => toggleMenu(prev => !prev)} className="wrapper-hamburger">
                <div className="hamburger-menu"></div>
            </div>
            <Navigation menuOpened={menuOpened} toggleMenu={() => toggleMenu(prev => !prev)}/>
          <main>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/skills" element={<Skills/>} />
              <Route path="/projects" element={<Projects/>} />
              <Route path="/contact" element={<Contact/>} />
            </Routes>
          </main>
        </div>
      </Router>
    </AppContextProvider>
  );
}

export default App;
