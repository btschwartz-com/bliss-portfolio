import React from "react";
import { useNavigate } from "react-router-dom";

const Dog = ({ image, name, id }) => {
    const navigate = useNavigate();
    console.log(image)
    return (
    <div
        className="dogItem"
        onClick={() => {
        navigate("/dogs/" + id);
        }}
    >
        <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
        {/* <div className="bgImage">
            <img src={image} alt="Dog" />

        </div> */}
        <h1> {name} </h1>
    </div>
    );
}

export default Dog;