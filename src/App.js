import React, { useEffect, useState } from 'react';
import Navigation from "./components/Navigation"
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './styles/index.css';
import {HashRouter as Router, Routes, Route} from "react-router-dom"
import { useTranslation } from 'react-i18next';
import useBlockScroll from './components/useBlockScroll';
import useWindowDimensions from './components/useWindowDimensions';

function App() {
  const [menuOpened, toggleMenu] = useState(false)
  const {i18n} = useTranslation()
  const {width} = useWindowDimensions()
  const [blockScroll, allowScroll] = useBlockScroll()

  const changeLanguage = () => {
    if (i18n.language === "en") {
      i18n.changeLanguage("ru")
      localStorage.setItem("lng", "ru")
    } else {
      i18n.changeLanguage("en")
      localStorage.setItem("lng", "en")
    }
  };

  useEffect(() => {
    if (menuOpened) blockScroll()
    if (!menuOpened) allowScroll()
  }, [menuOpened, width])

  return (
    <Router>
      <div className="app">
          <div onClick={() => toggleMenu(prev => !prev)} className="wrapper-hamburger">
              <div className="hamburger-menu"></div>
          </div>
          <Navigation menuOpened={menuOpened} toggleMenu={() => toggleMenu(prev => !prev)} changeLanguage={changeLanguage}/>
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
  );
}

export default App;
