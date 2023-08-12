import React from 'react';

export default function Nav({
    currentPage
}) {
    const scrollToSection = (section) => {
        const target = document.getElementById(section);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    };
        
    return (
        <ul className='nav nav-tab'>
            <li className='nav-item'>
                <a href="#home" onClick={() => scrollToSection('home')} className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>Home</a>
            </li>
            <li className='nav-item'>
                <a href="#about" onClick={() => scrollToSection('about')} className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>About</a>
            </li>
            <li className='nav-item'>
                <a href="#projects" onClick={() => scrollToSection('projects')} className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}>Projects</a>
            </li>
            <li className='nav-item'>
                <a href="#contact" onClick={() => scrollToSection('contact')} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact</a>
            </li>
        </ul>
    );
}