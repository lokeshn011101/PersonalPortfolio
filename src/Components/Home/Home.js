import React from "react";
import "./Home.css";
import MyImage from "./MyImage";
import AOS from "aos";
import "aos/dist/aos.css";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.homecontainer = React.createRef();
  }
  componentDidMount = () => {
    AOS.init({
      duration: 1000,
    });
  };
  lkLinesTop = () => {
    return (
      <div className="lk-lines-top">
        <div className="two">
          <div
            className="twol top-other"
            data-aos="fade-left"
            data-aos-delay="300"
          ></div>
          <div
            className="c top-other"
            data-aos="fade-left"
            data-aos-delay="350"
          ></div>
          <div
            className="c top-other"
            data-aos="fade-left"
            data-aos-delay="390"
          ></div>
        </div>
        <div className="three">
          <div
            className="threel top-other"
            data-aos="fade-left"
            data-aos-delay="300"
          ></div>
          <div
            className="c top-other"
            data-aos="fade-left"
            data-aos-delay="350"
          ></div>
        </div>
        <div className="one">
          <div
            className="onel top"
            data-aos="fade-left"
            data-aos-delay="300"
          ></div>
          <div
            className="c top"
            data-aos="fade-left"
            data-aos-delay="330"
          ></div>
          <div
            className="c top"
            data-aos="fade-left"
            data-aos-delay="360"
          ></div>
          <div
            className="c top"
            data-aos="fade-left"
            data-aos-delay="390"
          ></div>
        </div>
      </div>
    );
  };
  lkLinesBottom = () => {
    return (
      <div className="lk-lines-bottom">
        <div className="three">
          <div
            className="threel bottom"
            data-aos="fade-left"
            data-aos-delay="300"
          ></div>
          <div
            className="c bottom"
            data-aos="fade-left"
            data-aos-delay="350"
          ></div>
        </div>
        <div className="one">
          <div
            className="onel bottom-other"
            data-aos="fade-left"
            data-aos-delay="300"
          ></div>
          <div
            className="c bottom-other"
            data-aos="fade-left"
            data-aos-delay="330"
          ></div>
          <div
            className="c bottom-other"
            data-aos="fade-left"
            data-aos-delay="360"
          ></div>
          <div
            className="c bottom-other"
            data-aos="fade-left"
            data-aos-delay="390"
          ></div>
        </div>

        <div className="two">
          <div
            className="twol bottom-other"
            data-aos="fade-left"
            data-aos-delay="300"
          ></div>
          <div
            className="c bottom-other"
            data-aos="fade-left"
            data-aos-delay="350"
          ></div>
          <div
            className="c bottom-other"
            data-aos="fade-left"
            data-aos-delay="390"
          ></div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="homecontainer" ref={this.homecontainer}>
        <div className="namecontainer">
          <this.lkLinesTop />
          <div className="name">
            <div data-aos="fade-left">This is</div>
            <h1 data-aos="fade-left" data-aos-delay="500">
              <span data-aos="fade-left">Lokesh</span> Nagarajan
            </h1>
            <div style={{ fontSize: "25px" }} data-aos="fade-left">
              A Computer Science Student who is committed to Lifelong Learning!!
            </div>
          </div>
          <this.lkLinesBottom />
        </div>
        <MyImage />
      </div>
    );
  }
}

export default Home;
