import React from "react";
import { useParams } from "react-router-dom";
import { DogList } from "../../misc/DogList";
import './DogDisplay.css'

function DogDisplay() {
    const { id } = useParams();
    const dog = DogList[id];
    return (
    <div className="dog">
        <h1> {dog.name}</h1>
        <img src={dog.image} alt="Dog"/>
        <p>
        <b>Skills:</b> {dog.skills}
        </p>
    </div>
    );
}

export default DogDisplay;
