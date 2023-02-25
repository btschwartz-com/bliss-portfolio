import React from "react";
import Dog from "../../components/Dog";
import { DogList } from "../../misc/DogList";

import "../../pages/dogs/Dogs.css";



const Dogs = () => {
    return (
    <div className="projects">
        <h1> The dogs</h1>
        <div className="projectList">
            
        {DogList.map((dog, idx) => {
            return (
            <Dog key={idx} id={idx} name={dog.name} image={dog.image} />
            );
        })}
        </div>
    </div>
    );
}

export default Dogs;
