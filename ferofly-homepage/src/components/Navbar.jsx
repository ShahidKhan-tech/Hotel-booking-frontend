import React from 'react';
import {NavLink} from 'react-router-dom';
import { FaAlignRight } from 'react-icons/fa';
import jquery from 'jquery';
import {FaTripadvisor, FaFacebookF , FaInstagram} from 'react-icons/fa'
import './Navbar.css'

// for changing navbar  color
jquery(window).scroll(function() {
jquery('nav').toggleClass('scrolled', jquery(this).scrollTop() > 0);
})

const Navbar = () => {
    return (
    <>
        <nav className=" navbar navbar-expand-sm navbar-dark py-2 fixed-top bg-dark">
            <div className="container-fluid ">
                {/* <span className="navbar-brand font-weight-bolder">Life Luxury</span> */}
                <a href="void(0)" className="navbar-toggler border-0" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span>
                        <FaAlignRight className="nav-icon" /></span>
                </a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active_class" exact to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active_class" exact to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active_class" exact to="/rooms">Rooms</NavLink>
                        </li>
                
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active_class" exact to="/contact">Services</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active_class" exact to="/contact">Gallery</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active_class" exact to="/contact">See&Do</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active_class" exact to="/contact">Contact</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active_class" exact to="/contact">Book A Room</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
 <ul className="ct-socials">
 <li>
  <a href="#"><FaTripadvisor/></a>
  </li>

  <li>
  <a href="#"><FaFacebookF/></a>
  </li>
  <li>
  <a href="#"><FaInstagram/></a>
  </li>
</ul>
        
    </>
    );
}
export default Navbar;