import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages/Home'
import Menu from '../src/components/Menu'
import About from '../src/pages/About';
import WiazankiGallery from "../src/pages/WiazankiGallery"
import BouquetGallery from "../src/pages/BouquetGallery"
import SlubGallery from "../src/pages/SlubGallery"
import KoszeGallery from "../src/pages/KoszeGallery"
import CmentarGallery from "../src/pages/CmentarGallery"
import './App.css';

function App() {
  
  return (
     <Router>
    <div className="App">
    <Menu/>
    <Switch>
    <Route path="/" exact component={Home}/>
    <Route path="/About" component={About}/>
      <Route path="/WiazankiGallery" component={WiazankiGallery}/>
    <Route path="/BouquetGallery" component={BouquetGallery}/>
    <Route path="/SlubGallery" component={SlubGallery}/>
    <Route path="/KoszeGallery" component={KoszeGallery}/>
    <Route path="/CmentarGallery" component={CmentarGallery}/>

    </Switch>
    </div>
    </Router>
  );
}

export default App;
