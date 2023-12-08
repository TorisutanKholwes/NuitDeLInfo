import React from 'react';
import "../assets/css/don.scss";

export default class Don extends React.Component {
    x = 0;
    y = 0;

    moove = () => {
        const button = document.getElementById('buttonDon');
        const forms = document.getElementById('forms');

        const formsWidth = forms.offsetWidth;
        const formsHeight = forms.offsetHeight;

        button.style.top = `${Math.floor(Math.random() * (formsHeight - button.offsetHeight))}px`;
        button.style.left = `${Math.floor(Math.random() * (formsWidth - button.offsetWidth))}px`;
        button.style.transform = `translate(0, 0)`;
    }

    popup = () => {
        window.open("https://planete-urgence.org/1e-1-arbre-plante/#:~:text=1%20€%20donné%20%3D%201%20arbre%20planté&text=Chaque%20don%20est%20défiscalisé%20à,17€%20après%20réduction%20fiscale.")
    }

    render() {
        return (
            <>
                <div id="don">
                    <div id='forms'>
                        <p>Chaque don, aussi modeste soit-il, devient une étincelle de générosité qui allume l'espoir et illumine la vie de ceux dans le besoin. Ensemble, cultivons le pouvoir de la bienveillance et changeons le monde un geste à la fois. Faites la différence aujourd'hui, donnez avec le cœur.</p>
                        <button id='buttonDon' onMouseEnter={this.moove} onClick={this.popup}>Faire un don</button>
                    </div>
                </div >
            </>
        );
    }
}
