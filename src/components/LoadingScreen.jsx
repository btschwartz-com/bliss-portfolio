import React, { useEffect, useState } from "react";
import MovingComponent from "react-moving-text";
import { Fade } from "react-reveal";

const styles = {
    container: {
        backgroundColor: "black",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        opacity: 1,
        transition: "opacity 0.5s ease-out",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    message: {
        color: "white",
        fontSize: "1.5em",
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        // marginBottom: "15vh",
    },
    letterStyle: {
        display: "inline-block",
        fontSize: "3em",
        fontFamily: "Arial, sans-serif",
        color: "white",
        margin: "0.2em",
    },
    gifContainer: {
        maxWidth: "100%",
        maxHeight: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
        boxSizing: "border-box",
      },
    };

const LoadingScreen = ({ onFinishLoading }) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
        setVisible(false);
        }, 1750);

        return () => {
        clearTimeout(timer);
        };
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
        onFinishLoading();
        }, 2250);

        return () => {
        clearTimeout(timer);
        };
    }, [onFinishLoading]);

    const letters = "Hello".split();

    return (
        <div
        style={{
            ...styles.container,
            opacity: visible ? 1 : 0,
            pointerEvents: visible ? "auto" : "none",
        }}
        >
            <div style={styles.message}>
                {letters.map((letter, index) =>
                letter === " " ? (
                    "\u00A0\u00A0\u00A0"
                ) : (
                    <MovingComponent
                    key={index}
                    type="blur"
                    duration="2000ms"
                    delay={`${index * 100}ms`}
                    direction="normal"
                    timing="ease"
                    iteration="infinite"
                    fillMode="none"
                    style={styles.letterStyle}
                    >
                    {letter}
                    </MovingComponent>
                )
                )}
            </div>
            <Fade>
            <div style={styles.gifContainer}>
                <img src="images/loading.gif" alt="loading dog" />
            </div>
            </Fade>
        </div>
    );
};

export default LoadingScreen;
