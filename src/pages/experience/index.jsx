import React, { useState, useEffect } from "react"
import { Container, Row } from "react-bootstrap";
import { Chrono } from "react-chrono";
import FallbackSpinner from "../../components/FallbackSpinner";
import endpoints from "../../app/endpoints";

import './style.css'
import { PageTitle } from "../../components/PageTitle";

// https://github.com/prabhuignoto/react-chrono#theme


export const Experience = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(endpoints.experiences, {
            method: 'GET',
        }).then((res) => res.json()).then((res) => setData(res))
            .catch((err) => err);
    }, []);
    

    return (
        <Container>
            <Row>
                <PageTitle title="Experience" />
            </Row>
            {data ? (
                <Row>
                <Chrono 
                    items={data.experiences} 
                    mode="VERTICAL" 
                    theme={{
                        primary:  '#00274C',
                        secondary: '#1E1E1E',
                        cardBgColor: '#1E1E1E',
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