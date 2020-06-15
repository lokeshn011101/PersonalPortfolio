import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Skills.css";
import Python from "./Imgs/python.png";
import Numpy from "./Imgs/numpy.png";
import Pandas from "./Imgs/Pandas.png";
import ReactJS from "./Imgs/logo512.png";
import HtMl from "./Imgs/html.png";
import Css from "./Imgs/css.png";
import JavaScript from "./Imgs/javascript.png";
import C from "./Imgs/c.png";
import Cpp from "./Imgs/c++.png";

export default class Skills extends React.Component {
  componentDidMount = () => {
    AOS.init({ offset: 100, delay: 100, duration: 700 });
  };
  render() {
    return (
      <div className="skills-container" id="skills__id">
        <div className="sheading">
          <h1 data-aos="fade-down">Skills</h1>
        </div>
        <div className="skill-container">
          <div className="python" data-aos="fade-left" data-aos-offset="300">
            <div className="pythondiv list">
              <div className="pythonimg">
                <img src={Python} alt="" />
              </div>
              <div className="pythonp">
                <h5>Python</h5>
              </div>
            </div>
            <div className="pythondiv list">
              <div className="pythonimg">
                <img src={Numpy} alt="" />
              </div>
              <div className="pythonp">
                <h5 style={{ marginLeft: "15px" }}>Numpy (Python)</h5>
              </div>
            </div>
            <div className="pythondiv list">
              <div className="pythonimg">
                <img src={Pandas} alt="" />
              </div>
              <div className="pythonp">
                <h5 style={{ marginLeft: "15px" }}>Pandas(Python)</h5>
              </div>
            </div>
          </div>
          <div className="webdev" data-aos="zoom-in" data-aos-offset="300">
            <div className="webdevdiv list">
              <div className="webdevimg">
                <img src={ReactJS} alt="" />
              </div>
              <div className="webdevp">
                <h5>ReactJS</h5>
              </div>
            </div>
            <div className="webdevdiv list">
              <div className="webdevimg">
                <img src={HtMl} alt="" />
              </div>
              <div className="webdevp">
                <h5>HTML5</h5>
              </div>
            </div>
            <div className="webdevdiv list">
              <div className="webdevimg">
                <img src={Css} alt="" />
              </div>
              <div className="webdevp">
                <h5>CSS3</h5>
              </div>
            </div>
            <div className="webdevdiv list">
              <div className="webdevimg">
                <img src={JavaScript} alt="" />
              </div>
              <div className="webdevp">
                <h5>JavaScript</h5>
              </div>
            </div>
          </div>
          <div className="ccpp" data-aos="fade-right" data-aos-offset="300">
            <div className="cdiv list">
              <div className="cimg">
                <img src={C} alt="" />
              </div>
              <div className="cp">
                <h5>C</h5>
              </div>
            </div>
            <div className="cdiv list">
              <div className="cimg">
                <img src={Cpp} alt="" />
              </div>
              <div className="cp">
                <h5>C++</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
