import React, { useState, useEffect } from 'react';
import {
  Navbar,
  NavbarBrand,
  Form,
  FormGroup,
  Input,
  Container,
  Row,
  Col,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
  UncontrolledDropdown,
  Button,
} from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import './Navbar.scss';
import { withRouter } from 'react-router-dom';
import configData from '../../config.json';

const NavbarComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  const downloadResxFile = (key) => {
    window.open(configData.LOCAL_URL + 'getFile/' + key);
  };

  useEffect(() => {
    dispatch({
      type: 'SEARCHED_VALUE',
      payload: { search },
    });
  }, [search]);

  const userNameFromLocalStorega = localStorage.userName;
  let isLogged =  useSelector((state) => state.isLogInReducer.isLogin);

  useEffect(() => {
    if(userNameFromLocalStorega == null) {
      console.log("username null")
    } else {
      dispatch({
        type: 'LOGIN_NAME',
        payload: {userNameFromLocalStorega},
      });
      dispatch({
        type: 'IS_LOG_IN',
        payload: true,
      });
    }
  }, []);
  
  const goNewArc = () => {
    props.history.push('/addarc');
  };
  return (
    <div className="navbarComponent">
      <Container>
        {isLogged == true ? (
          <Row>
            <Navbar className="navbarNavbar" color="light" light expand="xl">
              <Col sm="2">
                <NavbarBrand style={{cursor:"pointer",textDecoration:"underline"}} onClick={() => props.history.push('/arclanguage')}>
                  ARCLanguage
                </NavbarBrand>
              </Col>
              <Col sm="4">
                <NavbarBrand>User: {userNameFromLocalStorega}</NavbarBrand>
              </Col>
              <Col className="colNavRight" sm="6">
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                  <Nav className="mr-auto" navbar>
                    <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle nav caret>
                        Download Resx File
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem onClick={() => downloadResxFile('DEF')}>
                          Default
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem onClick={() => downloadResxFile('TR')}>
                          Turkish
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem onClick={() => downloadResxFile('EN')}>
                          English
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem onClick={() => downloadResxFile('RU')}>
                          Russian
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem onClick={() => downloadResxFile('RO')}>
                          RO
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem onClick={() => downloadResxFile('DE')}>
                          DE
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </Nav>
                </Collapse>
                <Navbar color="light" light expand="md">
                  <Nav className="mr-auto" navbar>
                    <NavItem>
                      <Button onClick={goNewArc} color="secondary">
                        New
                      </Button>
                    </NavItem>
                  </Nav>
                </Navbar>
                <Form>
                  <FormGroup>
                    <Input
                      type="text"
                      name="searchById"
                      id="searchById"
                      value={search}
                      placeholder="Search"
                      onChange={(event) => {
                        setSearch(event.target.value);
                      }}
                    />
                  </FormGroup>
                </Form>
              </Col>
            </Navbar>
          </Row>
        ) : (
          //isLogged == false
          <Row>
            <Navbar className="navbarNavbar" color="light" light expand="xl">
              <Col sm="2">
                <NavbarBrand onClick={() => props.history.push('/')}>
                  ARCLanguage
                </NavbarBrand>
              </Col>
            </Navbar>
          </Row>
        )}
      </Container>
    </div>
  );
};
export default withRouter(NavbarComponent);
