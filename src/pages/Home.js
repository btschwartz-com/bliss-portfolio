import React from "react";

import "../styles/Home.css";

import { GifList } from "../misc/GifList";

// do the same but map each gif to a div
const Home = () => {
    return (
    <div>
        <h1>Why are you here?</h1>
        <div className='gifContainer'>
        {GifList.map((gif, idx) => {
            return (
            <div key={idx} className='gif'>
                <p>{gif['name']}</p>
                <img src={gif['image']} alt="example gif" />
            </div>
            );
        })}
        </div>
    </div>
    );
};



export default Home;
