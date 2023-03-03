import { Navbar, Nav, Container } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import withRouter from '../hooks/withRouter';
import endpoints from '../app/endpoints';
import ContactPopup from './ContactPopup';
import { Link } from 'react-router-dom';

const styles = {
  navbarCustom: {
    fontFamily: 'Arial',
    backgroundColor: '#00274C'
  },
  navLink: {
    fontFamily: 'Arial',
    padding: '0 12px',
    display: 'flex',
    margin: '5px',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    color: 'white',
  },
};




const NavBar = () => {
  const [data, setData] = useState(null);
  const [expanded, setExpanded] = useState(false);




  useEffect(() => {
    fetch(endpoints.navbar, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);


  const handleLinkClick = () => {
    setExpanded(false);
  };

  return (
    <Navbar
      fixed="top"
      bg="custom"
      variant="dark"
      className="navbar-custom"
      collapseOnSelect
      expand={false}
      expanded={expanded}
      onToggle={(expanded) => setExpanded(expanded)}
      style={styles.navbarCustom}
    >
      <Container>
        
        <Navbar.Brand>
          <Link to="/" className="text_2" onClick={handleLinkClick}>
          <img
            alt=""
            src={data?.logo?.source}
            width={data?.logo?.width}
            height={data?.logo?.height}
            className="d-inline-block align-top"
          />{' '}
          </Link>
        </Navbar.Brand>
        
        <Navbar.Brand >
          <ContactPopup/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ">
            {data?.sections?.map((section, index) => (
              <Link to={section.href} key={section.title} target={section.type === "link" ? "_blank" : "_self"} className="text_2" onClick={handleLinkClick}>
                <div id={index} style={styles.navLink} >
                  {section.title}
                </div>
              </Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

const NavBarWithRouter = withRouter(NavBar);
export default NavBarWithRouter;
