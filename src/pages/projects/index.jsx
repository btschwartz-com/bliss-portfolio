import { useState, useEffect, useContext } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { ThemeContext } from 'styled-components';
import Fade from 'react-reveal/Fade';
import endpoints from '../../app/endpoints';
import ProjectCard from '../../components/projectcard';
import FallbackSpinner from '../../components/fallbackspinner';
import { title, description } from '../../app/MetaData';


import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const styles = {
    containerStyle: {
        marginBottom: 25,
    },
    showMoreStyle: {
        margin: 25,
    },
    filterButtonStyle: {
        marginRight: 10,
    },
    selectedFilterButtonStyle: {
        backgroundColor: "#007bff",
        color: "#fff",
        borderColor: "#007bff",
    },
};

export const Projects = () => {
    const { bsSecondaryVariant } = useContext(ThemeContext);

    const [data, setData] = useState(null);
    const [showMore, setShowMore] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("Featured");
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        fetch(endpoints.projects, {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((res) => setData(res))
            .catch((err) => err);
    }, []);

    const buttons = ['All', 'Featured', 'School', 'Personal']
    useEffect(() => {
        if (data) {
            if (selectedCategory === "All") {
                setFilteredData(data.projects);
            } 
            else if (selectedCategory === "Featured") {
                setFilteredData(data.projects.filter((project) => project.is_featured));
            }
            else {
                setFilteredData(data.projects.filter((project) => project.category === selectedCategory));
            }
        } else {
            setFilteredData([]);
        }
    }, [data, selectedCategory]);

    const handleCategoryFilter = (category) => {
        setSelectedCategory(category);
    };

    
    const filterButtons = buttons.map((button) => (
        <Button

            key={button}
            variant={selectedCategory === button ? bsSecondaryVariant : "outline-secondary"}
            style={selectedCategory === button ? { ...styles.filterButtonStyle, ...styles.selectedFilterButtonStyle } : styles.filterButtonStyle}
            onClick={() => handleCategoryFilter(button)}
        >
            {button}
        </Button>
    ));

    const moreLimit = 6;
    const numberOfItems = showMore && filteredData ? filteredData.length : moreLimit;
    

    return (
        <HelmetProvider>
        <Container className="About-header">
            <Helmet>
                <meta charSet="utf-8" />
                <title> Projects | {title} </title>{" "}
                <meta name="description" content={description} />
            </Helmet>
            <Row className="mb-5 mt-3 pt-md-3">
                <Col lg="8">
                    <h1 className="display-4 mb-4"> Projects </h1>{" "}
                    <hr className="t_border my-4 ml-0 text-left" />
                </Col>
                <Col lg="4" className="text-right">
                    {filterButtons}
                </Col>
            </Row>
        {data
            ? (
            <div className="section-content-container">
                <Container style={styles.containerStyle}>
                <Row xs={1} sm={1} md={2} lg={3} className="g-4">
                    {filteredData.slice(0, numberOfItems).map((project) => (
                    <Fade key={project.title}>
                        <ProjectCard project={project} />
                    </Fade>
                    ))}
                </Row>

                {!showMore
                    && 
                    filteredData.length > moreLimit
                    &&
                    (
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