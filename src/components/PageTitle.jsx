import React from 'react';
import MovingComponent from 'react-moving-text';

// https://yidaoj.github.io/react-moving-text/


const styles = {
    letterStyle: {
        display: 'inline-block',
        fontSize: '3em',
        fontFamily: 'Arial, sans-serif',
        color: 'white'
    }
};
export const PageTitle = ({ title }) => {
    const letters = title.split('');

    return (
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
        <hr className="t_border my-4 ml-0 text-left"
            style={{color: '#FFCB05', borderWidth: '2px'}}/>
        </div>
    );
};