// import React from "react";
// import "./style.css";
// import { Helmet, HelmetProvider } from "react-helmet-async";
// import { Container, Row, Col } from "react-bootstrap";
// import {
//   dataabout,
//   meta,
//   worktimeline,
//   skills,
//   services,
// } from "../../content_option";

// export const About = () => {
//   return (
//     <HelmetProvider>
//       <Container className="About-header">
//         <Helmet>
//           <meta charSet="utf-8" />
//           <title> About | {meta.title}</title>
//           <meta name="description" content={meta.description} />
//         </Helmet>
//         <Row className="mb-5 mt-3 pt-md-3">
//           <Col lg="8">
//             <h1 className="display-4 mb-4">About me</h1>
//             <hr className="t_border my-4 ml-0 text-left" />
//           </Col>
//         </Row>
//         <Row className="sec_sp">
//           <Col lg="5">
//             <h3 className="color_sec py-4">{dataabout.title}</h3>
//           </Col>
//           <Col lg="7" className="d-flex align-items-center">
//             <div>
//               <p>{dataabout.aboutme}</p>
//             </div>
//           </Col>
//         </Row>
//         <Row className="sec_sp">
//           <Col lg="5">
//             <h3 className="color_sec py-4">Skills</h3>
//           </Col>
//           <Col lg="7">
//             {skills.map((data, i) => {
//               return (
//                 <div key={i}>
//                   <h3 className="progress-title">{data.name}</h3>
//                   <div className="progress">
//                     <div
//                       className="progress-bar"
//                       style={{
//                         width: `${data.value}%`,
//                       }}
//                     >
//                       <div className="progress-value">{data.value}%</div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </Col>
//         </Row>
//         <Row className="sec_sp">
//           <Col lang="5">
//             <h3 className="color_sec py-4">services</h3>
//           </Col>
//           <Col lg="7">
//             {services.map((data, i) => {
//               return (
//                 <div className="service_ py-4" key={i}>
//                   <h5 className="service__title">{data.title}</h5>
//                   <p className="service_desc">{data.description}</p>
//                 </div>
//               );
//             })}
//           </Col>
//         </Row>
//       </Container>
//     </HelmetProvider>
//   );
// };
import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Container, Col, Row } from 'react-bootstrap';
import Fade from 'react-reveal';
import endpoints from '../../app/endpoints';
import FallbackSpinner from '../../components/fallbackspinner';
import { useMediaQuery } from 'usehooks-ts';
import { Skills } from '../../components/Skills.jsx';

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
