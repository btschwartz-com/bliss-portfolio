import React, { useContext, useState, useEffect } from 'react';
import { ThemeContext } from 'styled-components';
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
  const { text_color } = useContext(ThemeContext);


  const [data, setData] = useState(null);

    useEffect(() => {
        fetch(endpoints.social, {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((res) => setData(res.social))
            .catch((err) => err);
    }, []);

  useEffect(() => {
    const elements = document.querySelectorAll(".stick_follow_icon p, .stick_follow_icon svg");
    elements.forEach((el) => {
      el.style.setProperty("--text-color", text_color);
    });
  }, [text_color]);



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


