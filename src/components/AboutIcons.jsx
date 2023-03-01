import React, { useState, useEffect } from 'react';
// import ReactMarkdown from 'react-markdown';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import endpoints from '../app/endpoints';
import FallbackSpinner from './FallbackSpinner';

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
    iconsListContainer: {
        margin: '0 auto',
        textAlign: 'center',
        fontSize: '1.2em',
        fontWeight: 500,
        fontFamily: 'Arial, sans-serif',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
    },
    skillContainer: {
        margin: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    skillIcon: {
        height: 75,
        width: 75,
        margin: 10,
        marginBottom: 0,
    },
    skillTitle: {
        textAlign: 'center',
        marginBottom: 30,
        fontSize: '1.5em',
        fontWeight: 'bold',
        fontFamily: 'Arial, sans-serif',
    },
};

const IconsList = ({ items }) => {
    return (
        <Fade>
        <div style={styles.iconsListContainer}>
        {items.map((item) => (
            <div key={item.title} style={styles.skillContainer}>
            <img style={styles.skillIcon} src={item.icon} alt={item.title} />
            <p>{item.title}</p>
            </div>
        ))}
        </div>
        </Fade>
    );
};

export const AboutIcons = () => {
    const [skillData, setSkillData] = useState(null);
    const [interestData, setInterestData] = useState(null);
    
    useEffect(() => {
        fetch(endpoints.skills, {
        method: 'GET',
        })
        .then((res) => res.json())
        .then((res) => setSkillData(res))
        .catch((err) => err);
    }, []);

    useEffect(() => {
        fetch(endpoints.interests, {
            method: 'GET',
            })
            .then((res) => res.json())
            .then((res) => setInterestData(res))
            .catch((err) => err);
    }, []);


    return (
        <>
        <div className="section-content-container">
            {interestData ? (
                <Fade>
                <Container>
                    {interestData.interests?.map((rows) => (
                    <div key={rows.title}>
                    <br />
                    <h3 style={styles.skillTitle}>{rows.title}</h3>
                    <IconsList items={rows.items} />
                    </div>
                    ))}
                </Container>
                </Fade>
            ) : <FallbackSpinner />}
            
            <hr className="t_border my-4 ml-0 text-left" />
            {skillData ? (
                <Fade>
                <Container>
                {/* {renderSkillsIntro(data.intro)} */}
                {skillData.skills?.map((rows) => (
                    <div key={rows.title}>
                    <br />
                    <h3 style={styles.skillTitle}>{rows.title}</h3>
                    <IconsList items={rows.items} />
                    </div>
                ))}
                </Container>
                </Fade>
            ) : <FallbackSpinner /> }
        </div>
        </>
    );
};

//<hr className="t_border my-4 ml-0 text-left" />