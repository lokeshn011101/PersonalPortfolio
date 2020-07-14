import React, { Component } from "react";
import { NavHashLink } from "react-router-hash-link";
import "./Navbar.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default class Navbar extends Component {
  componentDidMount = () => {
    AOS.init({ offset: 100, duration: 700 });
  };
  render() {
    return (
      <div className="navbar-container" data-aos="fade-left">
        <div className="navbar">
          <div className="navbar-menu">
            <div className="paddd" data-aos="fade-left" data-aos-delay="100">
              <NavHashLink
                smooth
                to="/#home__id"
                className="navbar-menu-link btn-1"
                id="bt1"
              >
                Home
              </NavHashLink>
            </div>
            <div className="paddd" data-aos="fade-left" data-aos-delay="200">
              <NavHashLink
                smooth
                to="/#skills__id"
                className="navbar-menu-link btn-1"
                activeClassName="btn-1-active"
                id="bt2"
              >
                Skills
              </NavHashLink>
            </div>
            <div className="paddd" data-aos="fade-left" data-aos-delay="300">
              <NavHashLink
                smooth
                className="navbar-menu-link btn-1"
                to="/#projects__id"
                id="bt3"
              >
                Mini Projects
              </NavHashLink>
            </div>
            <div className="paddd" data-aos="fade-left" data-aos-delay="400">
              <NavHashLink
                smooth
                className="navbar-menu-link btn-1"
                to="/#contact__id"
                id="bt4"
              >
                Contact
              </NavHashLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
