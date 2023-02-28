import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Col, Row } from 'react-bootstrap';
import Fade from 'react-reveal';

// HERE WHY THE HELL IS IT NOT CENTERED

const styles = {
    introTextContainer: {
        margin: 10,
        flexDirection: 'column',
        whiteSpace: 'pre-wrap',
        textAlign: 'center',
        fontSize: '1.2em',
        fontWeight: 500,
        justifyContent: 'center',
        fontFamily: 'Arial, sans-serif',
    },
    introImageContainer: {
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        maxWidth: '90%',
    },
    introRow: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    introCol: {
        margin: 10,
        textAlign: 'center',
        justifyContent: 'center',
        fontFamily: 'Arial, sans-serif',
        fontSize: '1.2em',
        fontWeight: 500,
    },
};

export const Bio = ({ data, matches }) => {
    const parseIntro = (text) => (
        <ReactMarkdown
        children={text}
        />
    );

    return (
        <>
        <Fade>
            <Row style={matches ? null : styles.introRow}>
            {matches ? (
                <>
                <Col style={styles.introTextContainer}>
                    {parseIntro(data.about)}
                </Col>
                <Col style={styles.introImageContainer}>
                    <img src={data?.imageSource} alt="profile" />
                </Col>
                </>
            ) : (
                <>
                <Col style={styles.introImageContainer}>
                    <img style={{maxWidth: '90%'}} src={data?.imageSource} alt="profile" />
                </Col>
                <Col style={styles.introCol}>
                    {parseIntro(data.about)}
                </Col>
                </>
            )}
            </Row>
        </Fade>
        </>
    );
};
