import React from 'react';
import './App.css';
import Nav from './components/Nav'
import Main from './components/Main'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Resume from './components/Resume'

function App() {
  return (
    <>
      <Nav/>
      <Main/>
      <About/>
      <Resume/>
      <Projects/>
      <Contact/>
    </>
  );
}

export default App;
