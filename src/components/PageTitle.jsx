import React from 'react';
import MovingComponent from 'react-moving-text';
import { LightSpeed } from 'react-reveal';
import { Zoom, Bounce } from 'react-reveal';
import Jump from 'react-reveal/Jump';
import Jello from 'react-reveal/Jello';
import RubberBand from 'react-reveal/RubberBand';

const getRandomComponent = () => {   
  const components = [Zoom, Bounce, Jump, Jello, RubberBand];
  const randomIndex = Math.floor(Math.random() * components.length);
  const component = components[randomIndex] || LightSpeed;
  return component;
};


const styles = {     
    letterStyle: {       
        display: 'inline-block',
        fontSize: '3em',
        fontFamily: 'Arial, sans-serif',
        color: 'white'
    }
};

export const PageTitle = ({ title, subtitle, random = true }) => {
    const letters = title.split('');

    if (subtitle) {
        console.log(subtitle);
    } // HERE
    else {
        console.log('No subtitle');
    }

    const RevealComponent = random ? getRandomComponent() : LightSpeed;

    return (
        <>
        <RevealComponent>
            <div style={{textAlign: 'center'}}>
            {letters.map((letter, index) =>
                letter === ' ' ? '\u00A0\u00A0\u00A0' :
                <MovingComponent
                key={index}
                type="effect3D"
                duration="2500ms"
                delay={`${index * 100}ms`}
                direction="normal"
                timing="ease"
                iteration="infinite"
                fillMode="none"
                style={styles.letterStyle}
                >
                {letter}
                </MovingComponent>
            )}
            </div>
        </RevealComponent>
        <hr className="t_border my-4 ml-0 text-left"
            style={{color: '#FFCB05', borderWidth: '2px'}}/>
        
        </>
    );
};
