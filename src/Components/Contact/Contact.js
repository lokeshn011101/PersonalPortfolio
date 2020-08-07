import React from "react";
import "./Contact.css";
import AOS from "aos";
import "aos/dist/aos.css";


export default class Contact extends React.Component {
  componentDidMount = () => {
    AOS.init({ offset: 100, delay: 100, duration: 700 });
  };
  render() {
    return (
      <div className="concontainer" id="contact__id">
        <div className="cheading" data-aos="fade-down">
          <h1>So You've come this far, Why don't we talk!?</h1>
        </div>
        <div className="clinks">
          <div data-aos="fade-left" data-aos-delay="180">
            <div className="l11">
              <a
                href="https://www.linkedin.com/in/lokesh-n-n-47a294190/"
                className="linked a1"
              >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <div className="span1">
                  Linked<div id="span1">I</div>N
                </div>
              </a>
            </div>
          </div>

          <div data-aos="fade-down" data-aos-delay="200">
            <div className="l11">
              <a
                href="https://www.instagram.com/_being_lokesh_/"
                className="insta a1"
              >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <div className="span2">Instagram</div>
              </a>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="225">
            <div className="l11">
              <a href="/" className="fb a1">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <div id="span3">Facebook</div>
              </a>
            </div>
          </div>
          <div data-aos="fade-right" data-aos-delay="250">
            <div className="l11">
              <a href="https://github.com/lokeshn011101" className="github a1">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <div id="span4">GitHub</div>
              </a>
            </div>
          </div>
        </div>
        <div className="concon">
          <div className="contxt" data-aos="fade-up" data-aos-offset="50">
            Contact: <div className="conph">9940080117</div>
          </div>
        </div>
      </div>
    );
  }
}
