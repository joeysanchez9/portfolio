import React from 'react';
import About from './header';
import Nav from './navigation';
import Projects from './project';

export default function PortfolioContainer() {
    return (
        <div>
          <Nav />
            <About />
            <Projects />
          
        </div>
      );
}