import React, {useState} from 'react';
import Footer from './components/Footer.js';
import Nav from './components/Nav.js';
import Portfolio from './components/Portfolio.js';
import About from './components/About.js';
import ContactForm from './components/Contact.js';
import Resume from './components/Resume.js'
import './App.css';

function App() {
    return (
    <div>
      <Nav></Nav>
      <main>
        <div>
        <About></About>
          <Portfolio></Portfolio>
          <Resume></Resume>
        </div>
        <ContactForm></ContactForm>
        <Footer/>
      </main>
    </div>
  );
}

export default App;