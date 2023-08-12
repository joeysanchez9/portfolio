import React from 'react';
import About from '../components/pages/header';
import Footer from '../components/pages/footer';
import Contact from '../components/pages/contact';  
import Nav from './navigation';
import Projects from '../components/pages/project';

export default function PortfolioContainer() {
    return (
        <div>
          <Nav />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </div>
      );
}