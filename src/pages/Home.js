import React, {useState, useEffect} from 'react';
import logo from '../img/logo.webp';
import {useTranslation} from "react-i18next";
import '../trans/i18n'
import PropagateLoader from "react-spinners/PropagateLoader";
import Menu from '../components/Menu'
import Cards from '../components/Cards'
import Footer from '../components/Footer'

const Home = (props) => {

  const [loading, setLoading] = useState(false);
  const [color] = useState("#00FF00");

  useEffect(() => {
  setLoading(true)
  setTimeout(() => {
  setLoading(false)
  }, 3000)
  }, [])

  const { t } = useTranslation();

  return (
    <div className="App">
       
      { 
         loading ? 
         <div className="loading">
           <div className="sloganContainer">
           <h2>Zielono Mi</h2>
       <p>{t("home.name")}</p>
       <PropagateLoader className="propagate" color={color}/>
       </div>
       </div>
       : 
       <>
       <Menu/>
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
       </>
       }

    </div>
  );
}

export default Home;
