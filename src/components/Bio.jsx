import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Col, Row } from 'react-bootstrap';
import Slide from 'react-reveal/Slide';


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
    


    if (matches) {
        return (
                <Row>
                    <Col style={styles.introTextContainer}>
                        <Slide left>
                            {parseIntro(data.about)}
                        </Slide>
                    </Col>
                    <Col style={styles.introImageContainer}>
                        <Slide right>
                            <img src={data?.imageSource} alt="profile" />
                        </Slide>
                    </Col>
                    
                </Row>
        );
    }
    else {
        return (
            <>
            <Slide left>
                <img style={{maxWidth: '90%'}} src={data?.imageSource} alt="profile" />
            </Slide>
            <Slide right>
                <div style={styles.introTextContainer}>
                    {parseIntro(data.about)}
                </div>
            </Slide>
            </>
        );
    }
};