
import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Container, Col, Row } from 'react-bootstrap';
import Fade from 'react-reveal';
import endpoints from '../../app/endpoints';
import FallbackSpinner from '../../components/fallbackspinner';
import { useMediaQuery } from 'usehooks-ts';

const styles = {
  introTextContainer: {
    margin: 10,
    flexDirection: 'column',
    whiteSpace: 'pre-wrap',
    textAlign: 'left',
    fontSize: '1.2em',
    fontWeight: 500,
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
  },
  skillsListContainer: {
    margin: 10,
    textAlign: 'left',
    fontSize: '1.2em',
    fontWeight: 500,
  },
};


const skillStyles = {
  iconStyle: {
    height: 75,
    width: 75,
    margin: 10,
    marginBottom: 0,
  },
  introTextContainer: {
    whiteSpace: 'pre-wrap',
  },
};

export const Skills = () => {
  const [data, setData] = useState(null);

  const renderSkillsIntro = (intro) => (
    <h4 style={skillStyles.introTextContainer}>
      <ReactMarkdown children={intro} />
    </h4>
  );

  useEffect(() => {
    fetch(endpoints.skills, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);

  return (
    <>
      {data ? (
        <Fade>
          <div className="section-content-container">
            <Container>
              {renderSkillsIntro(data.intro)}
              {data.skills?.map((rows) => (
                <div key={rows.title}>
                  <br />
                  <h3>{rows.title}</h3>
                  {rows.items.map((item) => (
                    <div key={item.title} style={{ display: 'inline-block' }}>
                      <img
                        style={skillStyles.iconStyle}
                        src={item.icon}
                        alt={item.title}
                      />
                      <p>{item.title}</p>
                    </div>
                  ))}
                </div>
              ))}
            </Container>
          </div>
        </Fade>
      ) : <FallbackSpinner /> }
    </>
  );
}



const Bio = ({ data, matches }) => {
  const parseIntro = (text) => (
    <ReactMarkdown
      children={text}
    />
  );

  return (
    <>
      <Fade>
        <Row style={matches ? null : styles.introRow}>
          {matches
            ? (
              <>
                <Col style={styles.introTextContainer}>
                  {parseIntro(data.about)}
                </Col>
                <Col style={styles.introImageContainer}>
                  <img src={data?.imageSource} alt="profile" />
                </Col>
              </>
            )
            : (
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

export const About = () => {
  const [data, setData] = useState(null);
  const matches = useMediaQuery('(min-width: 1000px)');

  const skills = [
    'React',
    'JavaScript',
    'HTML',
    'CSS',
    'Node.js',
    'Express',
    'MongoDB',
    'Git',
  ];

  useEffect(() => {
    fetch(endpoints.about, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);

  return (
    <>
      <div className="section-content-container">
        <Container>
          {data
            ? (
              <>
                <Bio data={data} matches={matches} />
                <Skills skills={skills} />
              </>
            )
            : <FallbackSpinner />}
        </Container>
      </div>
    </>
  );
};
