import { useState, useEffect, useContext } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { ThemeContext } from 'styled-components';
import Fade from 'react-reveal/Fade';
import endpoints from '../../app/endpoints';
import ProjectCard from '../../components/projectcard';
import FallbackSpinner from '../../components/fallbackspinner';


import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../../content_option";

const styles = {
    containerStyle: {
        marginBottom: 25,
    },
    showMoreStyle: {
        margin: 25,
    },
};


export const Projects = () => {
    const { bsSecondaryVariant } = useContext(ThemeContext);

    const [data, setData] = useState(null);
    const [showMore, setShowMore] = useState(false);

    useEffect(() => {
        fetch(endpoints.projects, {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((res) => setData(res))
            .catch((err) => err);
    }, []);
    const numberOfItems = showMore && data ? data.length : 6;

    return (
        <HelmetProvider>
        <Container className="About-header">
            <Helmet>
            <meta charSet="utf-8" />
            <title> Projects | {meta.title} </title>{" "}
            <meta name="description" content={meta.description} />
            </Helmet>
            <Row className="mb-5 mt-3 pt-md-3">
            <Col lg="8">
                <h1 className="display-4 mb-4"> Projects </h1>{" "}
                <hr className="t_border my-4 ml-0 text-left" />
            </Col>
            </Row>
        {data
            ? (
            <div className="section-content-container">
                <Container style={styles.containerStyle}>
                <Row xs={1} sm={1} md={2} lg={3} className="g-4">
                    {data.projects?.slice(0, numberOfItems).map((project) => (
                    <Fade key={project.title}>
                        <ProjectCard project={project} />
                    </Fade>
                    ))}
                </Row>

                {!showMore
                    && (
                    <Button
                    style={styles.showMoreStyle}
                    variant={bsSecondaryVariant}
                    onClick={() => setShowMore(true)}
                    >
                    show more
                    </Button>
                    )}
                </Container>
            </div>
            ) : <FallbackSpinner /> 
        }
        </Container>
        </HelmetProvider>
    );
};

