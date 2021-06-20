import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useTranslation} from "react-i18next";
import '../trans/i18n'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
  } from 'reactstrap';
import {Link} from 'react-router-dom'
import logo from '../img/logo.png'

 

const Menu = () => {

const styleNavbar = {
    paddingTop: "0px",
    paddingBottom: "0px"
}

const { t } = useTranslation();

const [isOpen, setIsOpen] = useState(false);

const toggle = () => setIsOpen(!isOpen);

return(
<div>
      <Navbar color="light" light expand="md" style={styleNavbar}>
         
        <NavbarBrand href="/" className="text"> <img className="menuLogo" src={logo} alt="logo"/> Zielono Mi</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
             <Link className="link" to="/About">About</Link>
              </NavItem>
            <NavItem>
            <Link className="link" to="/Contacts">Contacts</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
)
}
export default Menu;