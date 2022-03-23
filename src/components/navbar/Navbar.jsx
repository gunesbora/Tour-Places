import React from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark nav justify-content-center navbar pt-4 pb-4">
          <Link to="Tour-Places/Aboutus" className="nav-link navbar-brand">
            ABOUT US
          </Link>
          <Link to="Tour-Places/Foryou" className="nav-link navbar-brand">
            FOR YOU
          </Link>
          <Link to="Tour-Places/Services" className="nav-link navbar-brand">
            SERVICES
          </Link>
          <Link to="Tour-Places/Blog" className="nav-link navbar-brand">
            BLOG
          </Link>
          <Link to="Tour-Places/Vlog" className="nav-link navbar-brand">
            VLOG
          </Link>
          <Link to="Tour-Places/Contact" className="nav-link navbar-brand">
            CONTACT
          </Link>
           
               
           
        </nav>
    </div>
  )
}

export default Navbar