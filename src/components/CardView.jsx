import { useState, useEffect, } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import ProjectCard from './ProjectCard';
import FallbackSpinner from './FallbackSpinner';
import { title, description } from '../app/MetaData';
import MovingComponent from 'react-moving-text';



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
        marginTop: 10,
    },
    selectedFilterButtonStyle: {
        backgroundColor: '#00274C',
        color: "#fff",
        borderColor: '#00274C',
    },
};

export const CardView = (props) => {

    const { pageTitle, cards, categories } = props;

    const [showMore, setShowMore] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);
    const [filteredData, setFilteredData] = useState([]);

    // append All to the beginning of categories
    const buttons = ['All', ...categories];
    useEffect(() => {
        if (cards) {
            if (selectedCategory === "All") {
                setFilteredData(cards);
            } 
            else if (selectedCategory === "Featured") {
                setFilteredData(cards.filter((card) => card.is_featured));
            }
            else {
                setFilteredData(cards.filter((card) => card.category === selectedCategory));
            }
        } else {
            setFilteredData([]);
        }
    }, [cards, selectedCategory]);

    const handleCategoryFilter = (category) => {
        setSelectedCategory(category);
    };

    
    const filterButtons = buttons.map((button) => (
        <Button
            key={button}
            variant={selectedCategory === button ? 'light' : "outline-secondary"}
            style={selectedCategory === button ? { ...styles.filterButtonStyle, ...styles.selectedFilterButtonStyle } : styles.filterButtonStyle}
            onClick={() => handleCategoryFilter(button)}
        >
            {button}
        </Button>
    ));

    const moreLimit = 6;
    const numberOfItems = showMore && filteredData ? filteredData.length : moreLimit;
    
    const word = pageTitle.split('');

    return (
        <HelmetProvider>
        <Container className="About-header">
            <Helmet>
                <meta charSet="utf-8" />
                <title> {pageTitle} | {title} </title>{" "}
                <meta name="description" content={description} />
            </Helmet>
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
            <Row className="mb-5 mt-3 pt-md-3">
                <Col lg="6" className="text-right">
                    {filterButtons}
                </Col>
            </Row>
            
            
            {cards
                ? (
                <div className="section-content-container">
                    <Container style={styles.containerStyle}>
                    <Row xs={1} sm={1} md={2} lg={3} className="g-4">
                        {filteredData.slice(0, numberOfItems).map((project) => (
                        <Fade key={project.title}>
                            <ProjectCard project={project} 
                            />
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
                        variant={'light'}
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