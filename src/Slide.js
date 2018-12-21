import React from "react";

class Slide extends React.Component {
  state = { slide: false };

  render() {
    let slideClass = "leftouter";
    let wordShift = "";
    if (this.state.slide) slideClass += " left-full";
    if (this.state.slide) wordShift += " wordshift";
    return (
      <div className="slideclip">
        <div className="relativecontainer">
          <div className={slideClass}>
            <div
              className="left"
              onMouseEnter={() => this.setState({ slide: true })}
              onMouseLeave={() => this.setState({ slide: false })}
            >
              <div className={"leftword" + wordShift}>Slide Test</div>
            </div>
          </div>
          <div className="rightouter">
            <div className="right">
              <div className={"rightword" + wordShift}>Slide Test</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Slide;
