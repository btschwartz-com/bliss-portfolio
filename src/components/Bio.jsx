import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Col, Row } from 'react-bootstrap';
import Fade from 'react-reveal';


const styles = {
    introTextContainer: {
        margin: 15,
        flexDirection: 'column',
        whiteSpace: 'pre-wrap',
        textAlign: 'left',
        fontSize: '1.05em',
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
            <Row style={styles.introRow}>
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
                    <Row style={styles.introImageContainer}>
                        <img style={{maxWidth: '90%'}} src={data?.imageSource} alt="profile" />
                    </Row>
                    <Row style={styles.introTextContainer}>
                    {parseIntro(data.about)}
                    </Row>
                    </>
                )}
            </Row>

        </Fade>
        </>
    );
};
