import React from 'react'
import "../assets/css/randomLetter.scss";

export default class randomLetter extends React.Component {

    title = "Bienvenue sour nautre site por luté contr le climas"


    render() {
        return (
            <h1>{
                this.title.split('').map((letter, index) => {
                    return <span key={index} id={"letter-" + index}>{letter}</span>
                })
            }</h1>
        )
    }
}