import React, { useState, useEffect, useContext } from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import { ThemeContext } from 'styled-components';
import Fade from 'react-reveal/Fade';
import endpoints from '../../app/endpoints';
import ProjectCard from '../../components/projectcard';
import FallbackSpinner from '../../components/fallbackspinner';

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
    console.log('bruh')
    return (
        <>        
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
            ) : <FallbackSpinner /> }
        </>
        );
    };



