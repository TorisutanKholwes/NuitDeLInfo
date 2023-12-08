import React from "react";
import "../assets/css/textEnvironement.scss";


export default class TexteEnvironnemet extends React.Component {


    text = "Les activités humaines provoquent un réchauffement global. Il devient urgent d’agir et cela passe notamment par un changement de notre production d’énergie. Voici une sélection de quelques moyens de production ainsi avec d’un côté les énergies renouvelables et de l’autre les énergies fossiles. Pour plus d’informations : https://climat.be. Eoliennes :Les éoliennes exploitent une ressource renouvelable et inépuisable, le vent L'installation, la maintenance et la gestion des parcs éoliens créent des emplois locaux Les éoliennes peuvent contribuer à la diversification du mix énergétique, réduisant la dépendance à l'égard des sources d'énergie non renouvelables et des importations d'énergie. Nucléaire: Les centrales nucléaires peuvent générer une quantité considérable d'électricité Faibles Émissions de Gaz à Effet de Serre  Les centrales nucléaires offrent une source d'énergie stable et continue, indépendante des conditions météorologiques Solaire: L'énergie solaire exploite la lumière du soleil, une ressource renouvelable et inépuisable. La production d'énergie solaire génère très peu d'émissions de gaz à effet de serre, contribuant ainsi à la lutte contre le changement climatique. Une fois installés, les systèmes solaires ont des coûts d'exploitation relativement bas Les installations solaires peuvent contribuer à l'indépendance énergétique en réduisant la dépendance aux sources d'énergie non renouvelables. "

    convertCesar(text, decalage) {
        let alphabet = [..."abcdefghijklmnopqrstuvwxyz"];
        let result = "";
        for (let i = 0; i < text.length; i++) {
            let letter = text[i];
            if (!alphabet.includes(letter.toLowerCase())) {
                result += letter;
                continue
            }
            let index = alphabet.indexOf(letter);
            let newIndex = index + decalage;
            if (newIndex > 25) {
                newIndex = newIndex - 26;
            }
            if (newIndex < 0) {
                newIndex = newIndex + 26;
            }
            result += alphabet[newIndex];
        }
        return result;
    }

    render() {
        return <div id="textEnvironement">
            <h2>Plus d'info :</h2>
            <p>{this.convertCesar(this.text, Math.floor(Math.random()*26))}</p>
        </div>
    }

}