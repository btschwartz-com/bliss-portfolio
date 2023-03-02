import React, { useEffect, useState } from "react";
import MovingComponent from "react-moving-text";

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
    },
    message: {
        color: "white",
        fontSize: "1.5em",
        alignItems: "center",
        display: "flex",
    },
    letterStyle: {
        display: "inline-block",
        fontSize: "3em",
        fontFamily: "Arial, sans-serif",
        color: "white",
        margin: "0.2em",
    },
    gifContainer: {
        marginTop: "2em",
        maxWidth: "100%",
        maxHeight: "50%",
    },
    };

    export const LoadingScreen = ({ onFinishLoading }) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
        setVisible(false);
        }, 1500);

        return () => {
        clearTimeout(timer);
        };
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
        onFinishLoading();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
    }, [onFinishLoading]);

    const letters = "Ben".split();

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
        <div style={styles.gifContainer}>
            <img src="dog.gif" alt="loading dog" />
        </div>
        </div>
    );
};
