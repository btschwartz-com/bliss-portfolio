import React, { useEffect, useState, useContext } from 'react';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import { Container } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import { ThemeContext } from 'styled-components';
import Fade from 'react-reveal';
import endpoints from '../../app/endpoints';
import FallbackSpinner from '../../components/fallbackspinner';


const styles = {
  ulStyle: {
    listStylePosition: 'outside',
    paddingLeft: 20,
  },
  subtitleContainerStyle: {
    marginTop: 10,
    marginBottom: 10,
  },
  subtitleStyle: {
    display: 'inline-block',
  },
  inlineChild: {
    display: 'inline-block',
  },
  itemStyle: {
    marginBottom: 10,
  },
};
export const Experience = (props) => {
    const { lineColor, accentColor, color } = useContext(ThemeContext);
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(endpoints.experiences, {
        method: 'GET',
        })
        .then((res) => res.json())
        .then((res) => setData(res.experiences))
        .catch((err) => err);
    }, []);

    return (
        <>

        {data
            ? (
            <div className="section-content-container">
                <Container>
                <Timeline
                    lineColor={lineColor}
                >
                    {data.map((item) => (
                    <Fade>
                        <TimelineItem
                        key={item.title + item.dateText}
                        dateText={item.dateText}
                        dateInnerStyle={{ background: accentColor }}
                        style={styles.itemStyle}
                        bodyContainerStyle={{ color }}
                        >
                        <h2 className="item-title">
                            {item.title}
                        </h2>
                        <div style={styles.subtitleContainerStyle}>
                            <h4 style={{ ...styles.subtitleStyle, color: accentColor }}>
                            {item.subtitle}
                            </h4>
                            {item.workType && (
                            <h5 style={styles.inlineChild}>
                        &nbsp;·
                            {' '}
                            {item.workType}
                            </h5>
                            )}
                        </div>
                        <ul style={styles.ulStyle}>
                            {item.workDescription.map((point) => (
                            <div key={point}>
                                <li>
                                <ReactMarkdown
                                    children={point}
                                    components={{
                                    p: 'span',
                                    }}
                                />
                                </li>
                                <br />
                            </div>
                            ))}
                        </ul>
                        </TimelineItem>
                    </Fade>
                    ))}
                </Timeline>
                </Container>
            </div>
            ) : <FallbackSpinner /> }
        </>
    );
}



