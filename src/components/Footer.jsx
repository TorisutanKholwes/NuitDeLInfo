import React from "react";
import Wave from 'react-wavify';
import "../assets/css/footer.scss"

export default class Footer extends React.Component {

    render() {
        return <div id="footer">
            <Wave id="wavy"
            fill="#eeeeee"
            paused={false}
            options={{
                height: 1,
                amplitude: 40

            }}
             />
            <div id="truc">
                <p>Victor BRANCHU</p>
                <p>Raphaël BOBILLE</p>
                <p>Maxence GAUTIER-GRALL</p>
                <p>Timéo FRANVILLE</p>
                <p>Ilan RUBAUD</p>
                <p>Aurèle JOBLET</p>
                <p>Ewan QUELO</p>
            </div>
            
            
        </div>
    }
}