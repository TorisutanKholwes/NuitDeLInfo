import React from "react";

import Model from "./components/Model";
import Vignettes from "./components/vignette/Vignettes";
import Footer from './components/Footer';
import Bouton from "./components/Bouton";
import Alerte from "./components/AlertButton"
import RandomLetters from "./components/RandomLetters"
import Don from "./components/Don";
import Eolienne from './components/Eolienne'
import BoutonMaxence from './components/BoutonMaxence'
import Charlie from "./components/Charle_le_lit";
import TexteEnvironnemet from "./components/TexteEnvironnemet"
import Charlimage from './components/Charlimage'

import "./assets/css/app.scss"

export default class App extends React.Component {

    render() {
        return <div>
            <Charlimage />
            <Charlie />
            <Eolienne />
            <RandomLetters />
            <Model />
            <Alerte />
            <Bouton />
            <Vignettes />
            <Don />
            {/* <Footer /> */}
            <BoutonMaxence />
            <TexteEnvironnemet />
            {/* <Boutonpoint /> */}
        </div>
    }
}


