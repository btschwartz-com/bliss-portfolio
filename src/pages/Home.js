import React from "react";

import "../styles/Home.css";

import { ConstructionGif } from "../misc/Gifs";

// do the same but map each gif to a div
const Home = () => {
    return (
    <div>
        
        <h1>Under maintenence...check back later!</h1>
        <div className='gifContainer'>
            <img src={ConstructionGif} alt="example gif" />
        {/* {GifList.map((gif, idx) => {
            return (
            <div key={idx} className='gif'>
                <p>{gif['name']}</p>
                <img src={gif['image']} alt="example gif" />
            </div>
            );
        })} */}
        </div>
    </div>
    );
};



export default Home;
