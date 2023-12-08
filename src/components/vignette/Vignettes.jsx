import React from "react";
import Vignette from "./Vignette";

import render from "./Vignette1";
import Vignette2 from "./Vignette2";
import Vignette3 from "./Vignette3";


import "../../assets/css/vignette.scss"

export default class Vignettes extends React.Component {

    Zoom  = (event) => {
        let target = event.target;
        if (!target.classList.contains("vignette"))return
        let value = target.getAttribute("value");
        let divZoom = document.getElementById("vignette_zoom")
        if (value === "1") {
            console.log("test");
            divZoom.innerHTML = render()
        } else if (value === "2") {
            divZoom.innerHTML = Vignette2.render()
        } else if (value === "3") {
            divZoom.innerHTML = Vignette3.render()
        }
        
    }

    vignettes = [<Vignette val={1} key={1} />,
    <Vignette val={2} key={2} />,
    <Vignette val={3} key={3} />]

    render() {
        return (
            <div id="vignettes_box">
                <div onClick={this.Zoom} id="vignettes">
                    {this.vignettes.map((vignette) => vignette)}
                </div>
                <div id='vignette_zoom'/>
            </div>
        )
    }
}