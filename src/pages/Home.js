import React from 'react';
import logo from '../img/logo.png';
import {useTranslation} from "react-i18next";
import '../trans/i18n'
import Cards from '../components/Cards'

const Home = (props) => {

  const { t } = useTranslation();

  return (
    <div className="App">
      <header className="App-header">
     <p className="text">
        Kwiaciarnia
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <p className="text">
        Wśród kwiatów jak wśród dobrych i szczęśliwych myśli<br/> L.Staff
        </p> 
      </header>
      <main>
<Cards/>
      </main>
    </div>
  );
}

export default Home;
