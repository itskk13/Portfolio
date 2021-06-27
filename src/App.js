import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Main from './components/Main';
import Projects from './components/Projects';
import About from './components/About';


function App() {
  return (
    <>
    <NavBar />
    <Main />
    <Projects />
    <About />
    </>
  );
}

export default App;
