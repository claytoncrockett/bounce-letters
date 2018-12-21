import React from "react";
import Letter from "./Letter";
import Slide from "./Slide";

class Application extends React.Component {
  state = {
    velocity: [
      [-3, 3, 0],
      [3, -3, 1],
      [-3, -3, 2],
      [3, 3, 3],
      [-3, 3, 4],
      [3, -3, 5],
      [-3, -3, 6],
      [-3, 3, 7],
      [3, -3, 8],
      [-3, -3, 9],
      [3, 3, 10],
      [-3, 3, 11],
      [3, -3, 12],
      [-3, -3, 13],
      [3, 3, 14],
      [3, 3, 15]
    ],
    letters: [
      "C",
      "L",
      "A",
      "Y",
      "T",
      "O",
      "N",
      " ",
      "C",
      "R",
      "O",
      "C",
      "K",
      "E",
      "T",
      "T"
    ],
    finalPosition: [
      [10, 10],
      [10, 75],
      [10, 140],
      [10, 205],
      [10, 270],
      [10, 335],
      [10, 400],
      [10, 465],
      [10, 530],
      [10, 595],
      [10, 660],
      [10, 725],
      [10, 790],
      [10, 855],
      [10, 920],
      [10, 985]
    ],
    bouncing: true
  };

  collision = (index, direction) => {
    let arr = this.state.velocity;
    switch (direction) {
      case "h":
        arr[index][0] *= -1;
        this.setState({ velocity: arr });
        break;
      case "v":
        arr[index][1] *= -1;
        this.setState({ velocity: arr });
        break;
      default:
        break;
    }
    this.setState({ velocity: arr });
  };

  organize = () => {
    this.setState({ bouncing: false });
  };

  render() {
    return (
      <div id="App">
        {this.state.bouncing && (
          <div className="begin" onClick={() => this.organize()}>
            <h3 className="beginText">CLICK ME</h3>
          </div>
        )}
        <div className="fullname">
          {this.state.velocity.map(arr => {
            return (
              <Letter
                key={arr[2]}
                letter={this.state.letters[arr[2]]}
                vx={arr[0]}
                vy={arr[1]}
                index={arr[2]}
                collision={this.collision}
                bouncing={this.state.bouncing}
                finalPosition={this.state.finalPosition[arr[2]]}
              />
            );
          })}
        </div>
        {!this.state.bouncing && <Slide />}
      </div>
    );
  }
}

export default Application;
