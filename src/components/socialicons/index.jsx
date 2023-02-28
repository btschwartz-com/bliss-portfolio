import React, { useContext, useState, useEffect } from 'react';
import "./style.css";
import {
  FaGithub,
  FaTwitter,
  FaFacebookF,
  FaLinkedin,
  FaYoutube,
  FaTwitch,
} from "react-icons/fa";
import endpoints from "../../app/endpoints";


// make a map of the social icons
const socialIcons = {
  twitter: FaTwitter,
  github: FaGithub,
  facebook: FaFacebookF,
  linkedin: FaLinkedin,
  youtube: FaYoutube,
  twitch: FaTwitch,
  email: FaTwitch
};



export const Socialicons = () => {


  const [data, setData] = useState(null);

    useEffect(() => {
        fetch(endpoints.social, {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((res) => setData(res.social))
            .catch((err) => err);
    }, []);





  return (
    <div className="stick_follow_icon" >
      {data ? (
        <ul>
          {data.map((item, index) => {
            const Icon = socialIcons[item.name];
              return (
                <li key={index}>
                  <a href={item.href}>
                    <Icon />
                  </a>
                </li>
              );
          })}
        </ul>
      ) : null}
      
      <p>Follow Me</p>
    </div>
  );
};


