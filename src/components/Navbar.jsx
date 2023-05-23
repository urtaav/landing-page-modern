import React from 'react'
import './Navbar.module.css';
import { useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
const Navbar = () => {

  useEffect(() => {
    const scrollNavBar = () => {
      const $navBar = document.querySelector('.navbar');
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
      if (scrollTop > 90) {
        $navBar.classList.add('navbar-shrink');
      } else {
        $navBar.classList.remove('navbar-shrink');
      }
    };
  
    window.addEventListener('scroll', scrollNavBar);
  
    return () => {
      window.removeEventListener('scroll', scrollNavBar);
    };
  }, [])
  


  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        {/* <!-- Brand --> */}
        <a className="navbar-brand bg-brand" href="index.html">React-App</a>

        {/* <!-- Toggler/collapsibe Button --> */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar"
        >
         <FaBars/>
        </button>

        {/* <!-- Navbar links --> */}
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link active" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Screenshots</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Testimonials</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Pricing</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
