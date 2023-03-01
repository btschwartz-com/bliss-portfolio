import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import endpoints from '../app/endpoints';
import { useMediaQuery } from 'usehooks-ts';
import { Bio } from '../components/Bio';
import { AboutIcons } from '../components/AboutIcons';
import FallbackSpinner from '../components/FallbackSpinner';
import { Link } from 'react-router-dom';
import { PageTitle } from '../components/PageTitle';



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


  

  return (
    <div style={styles.sectionContentContainer}>
            <Container>
              <Row>
                <PageTitle title="Ben Schwartz" />
              </Row>
              
              <Row className="justify-content-center">
                {bioData ? (
                  <Bio data={bioData} matches={matches}/>
                ) : <FallbackSpinner />}
              </Row>
              <Row>
                <div className="d-flex flex-wrap justify-content-center">
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
    </div>
  );
};
