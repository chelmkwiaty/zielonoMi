import React from 'react';
import logo from '../img/logo.png';
import {useTranslation} from "react-i18next";
import '../trans/i18n'
import Cards from '../components/Cards'
import Footer from '../components/Footer'

const Home = (props) => {

  const { t } = useTranslation();

  return (
    <div className="App">
      <header className="App-header">
     <p className="text">
        {t("home.name")}
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <p className="text">
      {t("home.slogan")}<br/>{t("home.author")}
        </p> 
      </header>
      <main>
<Cards/>
      </main>
      <Footer/>
    </div>
  );
}

export default Home;
