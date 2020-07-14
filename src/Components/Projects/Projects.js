import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Projects.css";
import One from "./One.png";
import Two from "./222.png";
import Three from "./Three.png";

export default class Projects extends React.Component {
  componentDidMount = () => {
    AOS.init({ offset: 100, delay: 100, duration: 700 });
  };

  render() {
    return (
      <div className="projects-container" id="projects__id">
        <div className="pheading" data-aos="fade-down">
          <h1>Some Small Projects...</h1>
        </div>

        <div className="inner-project-container">
          <div
            className="inner-pcontainer"
            data-aos="fade-left"
            data-aos-offset="200"
          >
            <div className="procon">
              <div className="proconimg">
                <img src={One} alt="" className="pone" />
              </div>
              <div className="ptitle">
                <h2 className="t1">GridGame</h2>
              </div>

              <div className="descc">
                <div className="desccc">
                  A simple girdgame using HTML5, CSS3 and Vanilla JS!
                </div>
              </div>
              <div className="githublink">
                <a href="https://github.com/lokeshn011101/gridgame">
                  Visit the Github Repo...
                </a>
              </div>
            </div>
          </div>
          <div
            className="inner-pcontainer"
            data-aos="fade-down"
            data-aos-offset="200"
          >
            <div className="procon">
              <div className="proconimg">
                <img src={Two} alt="" className="ptwo" />
              </div>
              <div className="ptitle">
                <h2 className="t2">Calculator!</h2>
              </div>

              <div className="descc">
                <div className="desccc">
                  A Simple Calculator made using ReactJS and CSS3!
                </div>
              </div>
              <div className="githublink">
                <a href="https://github.com/lokeshn011101/Calculator">
                  Visit the Github Repo...
                </a>
              </div>
            </div>
          </div>
          <div
            className="inner-pcontainer"
            data-aos="fade-right"
            data-aos-offset="200"
          >
            <div className="procon">
              <div className="proconimg">
                <img src={Three} alt="" className="pthree" />
              </div>
              <div className="ptitle">
                <h2 className="t3">hAcKeRs_eScApE!</h2>
              </div>

              <div className="descc">
                <div className="desccc">
                  A Simple Questionnaire game made using C programming language!
                </div>
              </div>
              <div className="githublink">
                <a href="https://github.com/lokeshn011101/Hackers_Escape">
                  Visit the Github Repo...
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
