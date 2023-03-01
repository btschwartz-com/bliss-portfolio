import { Navbar, Nav, Container } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import withRouter from '../hooks/withRouter';
import endpoints from '../app/endpoints';
import { ContactPopup } from './ContactPopup';

const styles = {
  navbarCustom: {
    fontFamily: 'Arial',
  },
  navLink: {
    fontFamily: 'Arial',
  },
};

const contactButton = (
  <button style={{ backgroundColor: '#00274C', color: 'white', padding: '10px', border: 'none', borderRadius: '5px' }}>Contact Me</button>
)

const NavBar = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(endpoints.navbar, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);

  return (
    <Navbar
      fixed="top"
      bg="dark"
      variant="dark"
      className="navbar-custom"
      collapseOnSelect
      expand={false}
      style={styles.navbarCustom}
    >
      <Container>
        <Navbar.Brand href="/">
          <img
            alt=""
            src={data?.logo?.source}
            width={data?.logo?.width}
            height={data?.logo?.height}
            className="d-inline-block align-top"
          />{' '}
        </Navbar.Brand>
        <Navbar.Brand >
          <ContactPopup triggerButton={contactButton}/>
          
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ">
            {data?.sections?.map((section, index) => (
              <Nav.Link
                key={index}
                href={section.href}
                style={styles.navLink}
              >
                {section.title}
              </Nav.Link>
            ))}
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

const NavBarWithRouter = withRouter(NavBar);
export default NavBarWithRouter;
