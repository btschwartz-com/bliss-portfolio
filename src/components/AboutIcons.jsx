import React from 'react';
// import ReactMarkdown from 'react-markdown';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

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
        fontSize: '1.2em',
        fontWeight: 'bold',
        fontFamily: 'Arial, sans-serif',
        color: '#FFCB05',
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

export const AboutIcons = (props) => {
    const { icons } = props;



    return (
        <>
        <div className="section-content-container">
            <Fade>
            <Container>
            {/* {renderSkillsIntro(data.intro)} */}
            {icons?.map((rows) => (
                <div key={rows.title}>
                <h3 style={styles.skillTitle}>{rows.title}</h3>
                <IconsList items={rows.items} />
                <hr className="t_border my-4 ml-0 text-left"/>
                </div>
            ))}
            </Container>
            </Fade>
        </div>
        </>
    );
};
