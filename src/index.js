import React from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";
import "./index.css";

class ReactSlickDemo extends React.Component {
  render() {
    var settings = {
      dots: true
    };
    return (
      <div className="container">
        <h1>Nooreldean Koteb's</h1>
        <h2>React Page</h2>
        <Slider {...settings}>
          <div>
            <img src="https://googlechrome.github.io/samples/intrinsic-size/cat.jpg" />
          </div>
          <div>
            <img src="https://i.pinimg.com/originals/3e/86/d9/3e86d96fc4b143ae127ab8a79bf548d1.jpg" />
          </div>
          <div>
            <img src="https://daraskolnick.com/daraskolnick/wp-content/uploads/2015/03/kitty-721.jpg" />
          </div>
          <div>
            <img src="https://placekitten.com/408/287" />
          </div>
        </Slider>

        <div className="container2">
          <h1>Cat Galleria</h1>
          <p>This is a Quick ReactNative App that displays cat pictures.</p>

          <p>
          Email: <input/>
          <button
            onclick={function (event) {}}>
            Submit
          </button>
          </p>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<ReactSlickDemo />, document.getElementById("container"));
