import React from "react";
import { Component } from "react";
import "./App.css";
import Home from "../Home/Home";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";

export default class App extends Component {
  render() {
    return (
      <div className="appcontainer">
        <section className="home">
          <Home />
        </section>
        <section className="skills">
          <Skills />
        </section>
        <section className="projects">
          <Projects />
        </section>
        <section className="contact">
          <Contact />
        </section>
      </div>
    );
  }
}
