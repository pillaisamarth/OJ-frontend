import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import NavItem from 'react-bootstrap/NavItem';
import Urls from '../../Config/Urls';
import {Link} from 'react-router-dom';
import { handleLogout, checkLogin } from '../../Config/Utils';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

function NavbarComponent() {
  const navigate = useNavigate();
  const [firstElement, setFirstElement] = useState('Login');
  const [secondElement, setSecondElement] = useState('Register');
  React.useEffect(() => {
      checkLogin(setFirstElement,setSecondElement);
  }, []);
  const handleLogoutClick = () => {
    handleLogout();
    // checkLogin(setFirstElement, setSecondElement);
    // window.location.reload(true);
    setFirstElement('Login');
    setSecondElement('Register');
  }
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
            {firstElement === 'Login' ? (
              <Nav.Link as={Link} to = '/login' >{firstElement}</Nav.Link>
            ) : (
              <Nav.Link>{firstElement}</Nav.Link>
            )}
            {/* {secondElement === 'Register' ? (
              <Nav.Link as={Link} to='' onClick={handleLogout}>{secondElement}</Nav.Link>
            ) : (
              <Nav.Link as={Link} to='' onClick={handleLogout}>{secondElement}</Nav.Link>
            )} */}
            {/* <Nav.Link as={Link} to='/login'>{firstElement}</Nav.Link> */}
            {secondElement === 'Register' ? (
              <Nav.Link as={Link} to = '/register'>{secondElement}</Nav.Link>
            ) : (
              <Nav.Link as = {Link} to='/logout' onClick={handleLogoutClick}>{secondElement}</Nav.Link>
            )}
            {/* <Nav.Link as={Link} to='/logout' onClick={handleLogoutClick}>Logout</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      {/* </Container> */}
    </Navbar>
  );
}

export default NavbarComponent;