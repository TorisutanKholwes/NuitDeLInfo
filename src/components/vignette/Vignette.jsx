import React from "react";

import "../../assets/css/vignette.scss"

export default class Vignette extends React.Component {

    
    click() {

    }

    hoverr(id) {
        const jesaispas = "vignette" + id
        //const vign = document.getElementById(jesaispas);
        //vign.style.boxShadow = "1em black";
    }

    render() {
        const jesaispas = "vignette" + this.props.val
        return <div className="vignette" id={jesaispas} value={this.props.val} onClick={this.click} onMouseOver={this.hoverr(this.props.val)}/>
    }
}