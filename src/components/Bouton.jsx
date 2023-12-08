import React, { useState } from "react";
import "../assets/css/button.scss";

export default class Bouton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      count: 0,
    };
  }

  showImage = () => {
    const { count } = this.state;
    if (count === 5) {
      this.setState({ isVisible: true });
    }
    this.setState((prevState) => ({ count: prevState.count + 1 }))
  };

  render() {
    const { isVisible } = this.state;

    return (
      <div>
        {isVisible && (
          <div className="grid">
            <div className="rect">
              <div id="imageMoving" className="image"></div>
            </div>
          </div>
        )}
        <button id="monBouton" onClick={this.showImage}>
        </button>
      </div>
    );
  }
}
