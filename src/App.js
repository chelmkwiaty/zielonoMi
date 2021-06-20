import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages/Home'
import './App.css';

function App() {
  return (
     <Router>
    <div className="App">
    <Switch>
    <Route path="/" exact component={Home}/>
    {/* <Route path="/Gallery" component={Gallery}/>
    <Route path="/Contacts" component={Contacts}/>
    <Route path="/FamilyGallery" component={FamilyGallery}/> */}

    </Switch>
    </div>
    </Router>
  );
}

export default App;
