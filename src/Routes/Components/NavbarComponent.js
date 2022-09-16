import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import NavItem from 'react-bootstrap/NavItem';
import Urls from '../../Config/Urls';
import {Link} from 'react-router-dom';
import { handleLogout } from '../../Config/Utils';
import { useState } from 'react';

function NavbarComponent() {
  const [loginOrUser, setLoginOrUser] = useState();
  const [logoutOrRegister, setLogoutOrUser] = useState();
  return (
    <Navbar bg="dark" expand="lg" variant='dark'>
      {/* <Container> */}
        <Navbar.Brand>DJANGO WEBSITE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to=''>ProblemList</Nav.Link>
            {/* <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>
            <Nav.Link as={Link} to='/login'>Current User</Nav.Link>
            <Nav.Link as={Link} to='/login' onClick={handleLogout}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      {/* </Container> */}
    </Navbar>
  );
}

export default NavbarComponent;