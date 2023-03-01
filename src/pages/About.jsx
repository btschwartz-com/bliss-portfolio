import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Fade from 'react-reveal';
import endpoints from '../app/endpoints';
import { useMediaQuery } from 'usehooks-ts';
import { Bio } from '../components/Bio';
import { AboutIcons } from '../components/AboutIcons';
import FallbackSpinner from '../components/FallbackSpinner';
import MovingComponent from 'react-moving-text';
import { Link } from 'react-router-dom';



const styles = {
  separator: {
    borderTop: '1px solid #d3d3d3',
    margin: '32px 0',
  },

  sectionContentContainer: {
    marginTop: '64px',
    maxWidth: '1000px',
    margin: '0 auto',
  },
};

export const About = () => {
  const [bioData, setBioData] = useState(null);
  const [skillData, setSkillData] = useState(null);
  const [interestData, setInterestData] = useState(null);
  const [homeData, setHomeData] = useState(null);
  const matches = useMediaQuery('(min-width: 1000px)');

  useEffect(() => {
    fetch(endpoints.about, {
      method: 'GET',
    }).then((res) => res.json()).then((res) => setBioData(res))
      .catch((err) => err);
  }, []);

  useEffect(() => {
      fetch(endpoints.skills, {method: 'GET',})
      .then((res) => res.json()).then((res) => setSkillData(res))
      .catch((err) => err);
  }, []);

  useEffect(() => {
      fetch(endpoints.interests, { method: 'GET', })
        .then((res) => res.json()).then((res) => setInterestData(res))
        .catch((err) => err);
  }, []);

  useEffect(() => {
      fetch(endpoints.home, { method: 'GET', })
        .then((res) => res.json()).then((res) => setHomeData(res))
        .catch((err) => err);
  }, []);


  const word  = "Ben Schwartz".split('');
  // add a space after the third character
  // https://yidaoj.github.io/react-moving-text/

  return (
    <div style={styles.sectionContentContainer}>
          <Fade>
            <Container>
              <Row>
                <Col>
                <div className='custom' >
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
              <Row className="justify-content-center">
                {bioData ? (
                  <Bio data={bioData} matches={matches}/>
                ) : <FallbackSpinner />}
              </Row>
              <hr style={styles.separator} />
              <Row>
              <div className="d-flex flex-wrap">
                  {homeData ? (
                    <>
                      {homeData.buttons.map((item) => (
                      item.name !== 'Me' &&
                      <Link to={item.route} key={item.name} className="text_2">
                        <div id={item.id} className="ac_btn btn ">
                          {item.name}
                          <div className="ring one"></div>
                          <div className="ring two"></div>
                          <div className="ring three"></div>
                        </div>
                      </Link>
                    ))}
                    </>
                  ) : <FallbackSpinner />}
                </div>
              </Row>
              <hr style={styles.separator} />
              <Row>
              {skillData && interestData ? (
                <AboutIcons skills={skillData} interests={interestData}/>
              ) : <FallbackSpinner />}
              </Row>
              
              
              
            </Container>
          </Fade>
    </div>
  );
};
