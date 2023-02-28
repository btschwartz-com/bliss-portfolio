import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Col, Row } from 'react-bootstrap';
import Fade from 'react-reveal';



const styles = {
    introTextContainer: {
        margin: 10,
        flexDirection: 'column',
        whiteSpace: 'pre-wrap',
        textAlign: 'left',
        fontSize: '1.2em',
        fontWeight: 500,
        fontFamily: 'Arial, sans-serif',
    },
    introImageContainer: {
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
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
                <Col style={styles.introCol}>
                    <img src={data?.imageSource} alt="profile" />
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
