import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Popup from 'reactjs-popup';
import endpoints from '../app/endpoints';
import FallbackSpinner from './FallbackSpinner';


const styles = {
    modal_popup: {
      fontFamily: 'Arial',
      fontSize: '12px',
      color: 'white',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '20px',
      marginBottom: '10px',
      borderRadius: '10px',
    },
    header: {
      width: '100%',
      borderBottom: '1px solid gray',
      marginBottom: '20px',
    },
    modal_title: {
      fontFamily: 'Arial',
      fontSize: '24px',
      margin: 0,
    },
    content: {
      width: '100%',
      marginBottom: '20px',
    },
    modal_paragraph: {
      fontFamily: 'Arial',
      margin: 0,
      fontSize: '20px',
    },
    email: {
      marginTop: '15px',
      fontSize: '24px',
      fontFamily: 'Courier New',
    },
    actions: {
      width: '100%',
      marginBottom: '20px',
    },
    pretty_button: {
      fontFamily: 'Arial',
      fontSize: '16px',
      padding: '10px 20px',
      backgroundColor: '#01FFE6',
      color: 'black',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
    pretty_button_hover: {
      backgroundColor: '#0066cc',
    },
    close: {
      cursor: 'pointer',
      position: 'absolute',
      display: 'block',
      padding: '2px 5px',
      lineHeight: '20px',
      right: '-10px',
      top: '-10px',
      fontSize: '24px',
      background: '#ffffff',
      borderRadius: '18px',
      border: '1px solid #cfcece',
    },
  };


const popup_styles = {
    width: '60%',
    background: '#000080',
    fontFamily: 'Arial',
    borderRadius: '10px',
}


  

export const ContactPopup = (props) => {
    
    const [showEmail, setShowEmail] = useState(false);
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(endpoints.contact, {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((res) => setData(res))
            .catch((err) => err);
    }, []);

    const handleClick = () => {
        setShowEmail(true);
    };

    const handleClose = () => {
        setShowEmail(false);
    };

    return (
        <Popup
            trigger={props.triggerButton}
            modal
            nested
            contentStyle={popup_styles}
            onClose={handleClose}
        >
            {data ? (
                <div>
                    <div style={styles.modal_popup}>
                    <div style={styles.header}>
                        <h2 style={styles.modal_title}>{data.contact?.title}</h2>
                    </div>
                    <div style={styles.content}>
                        <p style={styles.modal_paragraph}>
                        {data.contact?.body}
                        </p>
                    </div>
                    <div style={styles.actions}>
                        {showEmail ? (
                        <p style={styles.email}>
                            {data.contact?.email}
                        </p>
                        ) : (
                        <Button
                            style={styles.pretty_button}
                            onMouseEnter={(e) =>
                            (e.target.style.backgroundColor = styles.pretty_button_hover.backgroundColor)
                            }
                            onMouseLeave={(e) =>
                            (e.target.style.backgroundColor = styles.pretty_button.backgroundColor)
                            }
                            onClick={handleClick}
                        >
                            My Email
                        </Button>
                        )}
                    </div>
                    </div>
                </div>
            ) : <FallbackSpinner />}
            
        </Popup>
    );
};
