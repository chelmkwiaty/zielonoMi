import React from 'react'
import facebook from '../img/icons/facebook.svg'
import location from '../img/icons/location.png'
import gmail from '../img/icons/gmail.svg'
import telephone from '../img/icons/telephone.svg'
import sms from '../img/icons/sms.svg'  
import leafLogo from '../img/leafLogo50x70.webp'
import {useTranslation} from "react-i18next";
import '../trans/i18n'

const Footer = (props) => {

  const { t } = useTranslation();

    return (
        <footer className="footer">
        <div className="footer-left col-md-4 col-sm-6">
          <p className="aboutFooter">
            <span>{t("menu.about")}</span><b>{t("home.name")} ' Zielono Mi '<br/>
{t("footer.delivery")}</b>
          </p>
          <div className="icons">
          <a href="mailto:annatulidowicz@gmail.com" aria-label="Gmail"><img className="gmail" src={gmail} alt="Gmail"/></a>
              <a href="https://www.facebook.com/zielonomikwiaciarnia/" aria-label="Facebook"><img className="facebook" src={facebook} alt="Facebook"/></a>
              <a href="https://maps.google.com/?ll=51.128629,23.458564" aria-label="Location"><img className="location" src={location} alt="Location"/></a>
              <a href="tel:504-075-908" aria-label="Telephone"><img className="telephone" src={telephone} alt="Telephone"/></a>
              <a href="sms:+48504075908" aria-label="sms"><img className="sms" src={sms} alt="sms"/></a>
            </div>
        </div>
        <div className="footer-center col-md-4 col-sm-6">
          <div>
            <i className="fa fa-map-marker"></i>
            <p><span></span>{t("footer.address")}<br/> ul. Ogrodowa 82, 22-100, Chełm<br/>
{t("footer.hours")}<br/> {t("footer.days")}<br/>{t("footer.account")}<br/>  53 2490 0005 0000 4530 0004 8404</p>
          </div>
          <div>
            <i className="fa fa-phone"></i>
            <a className="phoneLink" href="tel:504-075-908" aria-label="Telephone">(+48) 504 075 908</a>
          </div>
          <div>
              <i className="fa-envelope"></i>
            <a className="mailLink" href="mailto:annatulidowicz@gmail.com" aria-label="Mail me"> annatulidowicz@gmail.com</a>
          </div>
        </div>
        <div className="footer-right col-md-4 col-sm-6">
          <h2>Zielono Mi</h2>
          <img src={leafLogo} className="logoFooter" alt="logo"/>
          <p className="name"> Zielono Mi &copy; {new Date().getFullYear()}</p>
          
        </div>
      </footer>
    )
}
export default Footer;