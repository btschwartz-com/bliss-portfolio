import React, { useState, useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap";
import { Chrono } from "react-chrono";
import MovingComponent from 'react-moving-text';
import FallbackSpinner from "../../components/FallbackSpinner";
import endpoints from "../../app/endpoints";

import './style.css'

// https://github.com/prabhuignoto/react-chrono#theme


export const Experience = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(endpoints.experiences, {
            method: 'GET',
        }).then((res) => res.json()).then((res) => setData(res))
            .catch((err) => err);
    }, []);
    

    const word = "Experience".split('');

    return (
        <Container>
            <Row>
                <Col>
                <div style={{textAlign: 'center'}} >
                {word.map((letter, index) =>
                    letter === ' ' ? '\u00A0\u00A0\u00A0' :
                    <MovingComponent
                        key={index}
                        type="pulse"
                        duration="1600ms"
                        delay={`${index * 100}ms`}
                        direction="normal"
                        timing="ease"
                        iteration="infinite"
                        fillMode="none"
                        style={{
                            display: 'inline-block',
                            fontSize: '3em',
                            fontFamily: 'Arial, sans-serif',
                            color: '1, 255, 230'
                        }}>
                        {letter}
                    </MovingComponent>
                )}
                </div>
                </Col>
              </Row>
              <hr className="t_border my-4 ml-0 text-left" />
            {data ? (
                <Row>
                <Chrono 
                    items={data.experiences} 
                    // mode="VERTICAL" 
                    theme={{
                        primary: '#01FFE6',
                        secondary: 'grey',
                        cardBgColor: '#000080',
                        cardForeColor: 'white',
                        titleColor: 'black',
                        titleColorActive: 'white',
                    }}
                    classNames={{
                        card: 'my-card',
                        cardMedia: 'my-card-media',
                        cardSubTitle: 'my-card-subtitle',
                        cardText: 'my-card-text',
                        cardTitle: 'my-card-title',
                        controls: 'my-controls',
                        title: 'my-title',
                    }}
                    
                />
            </Row>
            ) : <FallbackSpinner />}
        </Container>
    )
};