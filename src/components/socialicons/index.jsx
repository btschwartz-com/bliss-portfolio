import React, { useContext, useEffect } from 'react';
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
import { socialprofils } from "../../content_option";

// make a map of the social icons
const socialIcons = {
  twitter: FaTwitter,
  github: FaGithub,
  facebook: FaFacebookF,
  linkedin: FaLinkedin,
  youtube: FaYoutube,
  twitch: FaTwitch,
};



export const Socialicons = () => {
  const { text_color } = useContext(ThemeContext);

  useEffect(() => {
    const elements = document.querySelectorAll(".stick_follow_icon p, .stick_follow_icon svg");
    elements.forEach((el) => {
      el.style.setProperty("--text-color", text_color);
    });
  }, [text_color]);

  return (
    <div className="stick_follow_icon" >
      <ul>
        {Object.entries(socialprofils).map(([key, value]) => {
          const Icon = socialIcons[key];
            return (
              <li key={key}>
                <a href={value}>
                  <Icon />
                </a>
              </li>
            );
        })}
      </ul>
      <p>Follow Me</p>
    </div>
  );
};
