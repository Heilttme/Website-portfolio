import React from 'react';
import { AppContextProvider } from './components/AppContext';
import Navigation from "./components/Navigation"
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './styles/index.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"


function App() {
  return (
    <AppContextProvider value="">
      <Router>
        <div className="app">
            <Navigation/>
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
