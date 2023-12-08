import React from 'react';
import "../assets/css/Charlie.scss";


export default class Charlie extends React.Component {

    Trouver = () => {
        alert ("Bien joué tu as trouvé Charlie !!!");
    }

    render () {
          return (
        <div>
        <div id='Charlie' onClick={this.Trouver}/>
        </div>
    )  
    }

}