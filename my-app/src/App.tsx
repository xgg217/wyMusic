import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route } from 'react-router-dom';


import Tabs from 'compontes/tabs';
import Index from 'pages/index';
import My from 'pages/my';
import Find from 'pages/find';
import Footer from 'pages/footer'



const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <header>
          <Tabs></Tabs>
        </header>

        <main>
          <Switch>
            <Route path='/' exact component={ Index }></Route>
            <Route path='/my' exact component={ My }></Route>
            <Route path='/find' exact component={ Find }></Route>
            <Redirect to='/'></Redirect>
          </Switch>
        </main>
        <footer className="footer">
          <Footer></Footer>
        </footer>
      </div>
    </Router>
    
  );
}

export default App;
