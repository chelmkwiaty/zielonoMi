import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useTranslation} from "react-i18next";
import '../trans/i18n'
import {
  Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem,} from 'reactstrap';
import {Link} from 'react-router-dom'
import leafLogo from '../img/leafLogo.webp'

 

const Menu = () => {

const { t } = useTranslation();

const [collapsed, setCollapsed] = useState(true);

const toggleNavbar = () => setCollapsed(!collapsed);  

return(
  <div>
  <Navbar color="faded" light>
    <NavbarBrand href="/" className="mr-auto text"><img className="menuLogo" src={leafLogo} alt="logo"/> Zielono Mi</NavbarBrand>
    <NavbarToggler onClick={toggleNavbar} className="mr-2" />
    <Collapse isOpen={!collapsed} navbar>
      <Nav navbar>
        <NavItem>
        <Link className="link" to="/About">{t("menu.about")}</Link>
        </NavItem>
        <NavItem>
        <a href="https://www.facebook.com/zielonomikwiaciarnia/" className="link">Facebook</a>
        </NavItem>
      </Nav>
    </Collapse>
  </Navbar>
</div>
)
}
export default Menu;