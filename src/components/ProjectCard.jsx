import React from 'react';
import {
    Button, Card, Badge, Col,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

const styles = {

    badgeStyle: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
        margin: 5,
    },
    cardStyle: {
        borderRadius: 10,
        backgroundColor: '#060606',
        borderColor: '#ffffff20',
    },
    cardTitleStyle: {
        marginTop: 20,
        fontSize: 24,
        fontWeight: 700,
    },
    cardTextStyle: {
        textAlign: 'left',
    },
    linkStyle: {
        textDecoration: 'none',
        padding: 10,
    },
    buttonStyle: {
        margin: 5,
    },
    bubbleStyle: {
        position: 'absolute',
        top: 0,
        color: 'white',
        padding: '5px 10px',
        borderRadius: '0 10px 0 10px',
        fontSize: 14,
        fontWeight: 'bold',
    },
    cardFooter: {
        backgroundColor: '#181818',
    }
};

const badgeColors = {
    white: 'light',
    yellow: 'warning',
    green: 'success',
    blue: 'primary',
    cyan: 'info',
    red: 'danger',
    gray: 'secondary'
};


const leftColor = '#007bff';
const rightColor = '#F700FF';


const ProjectCard = (props) => {
    const parseBodyText = (text) => <ReactMarkdown children={text} />;

    const { project } = props;

    return (
        <Col>
            <Card
                style={{
                    ...styles.cardStyle,
                }}
                text='light'
            >
                {project.leftBubble && (
                    <div style={{
                        ...styles.bubbleStyle,
                        backgroundColor: leftColor,
                        left: 0
                        }}>
                        {project.leftBubble}
                    </div>
                )}
                {project.rightBubble && (
                    <div style={{
                        ...styles.bubbleStyle,
                        backgroundColor: rightColor,
                        right: 0
                        }}>
                        {project.rightBubble}
                    </div>
                )}
                <Card.Img variant="top" src={project?.image} />
                <Card.Body>
                    <Card.Title style={styles.cardTitleStyle}>{project.title}</Card.Title>
                    <Card.Text style={styles.cardTextStyle}>
                        {parseBodyText(project.bodyText)}
                    </Card.Text>
                </Card.Body>

                <Card.Body>
                    {project?.links?.map((link) => (
                        <Button
                            key={link.href}
                            style={styles.buttonStyle}
                            variant={'outline-light'}
                            onClick={() => window.open(link.href, '_blank')}
                        >
                            {link.text}
                        </Button>
                    ))}
                </Card.Body>
                {project.tags && (
                    <Card.Footer style={styles.cardFooter}>
                        {project.tags.map((tag) => (
                    <Badge
                        key={tag.text}
                        pill
                        bg={badgeColors[tag.color]}
                        text='dark'
                        style={styles.badgeStyle}
                    >
                        {tag.text}
                    </Badge>
                ))}
                        
                    </Card.Footer>
                )}
            </Card>
        </Col>
    );
};
    ProjectCard.propTypes = {
    project: PropTypes.shape({
        title: PropTypes.string.isRequired,
        bodyText: PropTypes.string.isRequired,
        image: PropTypes.string,
        links: PropTypes.arrayOf(PropTypes.shape({
            text: PropTypes.string.isRequired,
            href: PropTypes.string.isRequired,
        })),
        tags: PropTypes.arrayOf(PropTypes.shape({
            text: PropTypes.string.isRequired,
            color: PropTypes.string.isRequired,
        })),
    }).isRequired,
    };

export default ProjectCard;
