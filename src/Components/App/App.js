import React from "react";
import { Component } from "react";
import "./App.css";
import Home from "../Home/Home";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import Navbar from "../Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div className="appcontainer">
        <BrowserRouter>
          <Navbar />
          <Home />
          <Skills />
          <Projects />
          <Contact />
        </BrowserRouter>
      </div>
    );
  }
}
