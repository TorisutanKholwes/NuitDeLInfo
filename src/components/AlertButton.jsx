import React, { useState } from "react";
import "../assets/css/alertButton.scss";

import feu from "../assets/resources/earth-fire.png"

export default class Alerte extends React.Component {

  AlerteBouton = () => {
    let button = document.getElementById('terrerouge');
    let fire = document.getElementById('fireball');
    button.classList.add('active');
    fire.classList.add('active');
    setTimeout(() => {
      button.classList.remove('active');
      fire.classList.remove('active');
    }, 5000);
  };

  render() {

    return (
    <div>
    <div id="terrerouge"/>
    <div id="alert-button" onClick={this.AlerteBouton} >⚠️</div>
    <img id="fireball" src={feu} alt="" />
    </div>
    );
  }
}