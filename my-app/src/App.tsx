import React, { useState, useEffect, Suspense, lazy } from 'react';
// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route } from 'react-router-dom';

const Ranking = lazy(() => import('pages/ranking')); // 排行榜
const Tabs = lazy(() => import('compontes/tabs'));
const My = lazy(() => import('pages/my'));
const Index = lazy(() => import('pages/index'));
const Find = lazy(() => import('pages/find'));
const Footer = lazy(() => import('pages/footer'));

const App: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={ null }>
        <div className="App">
          <header>
            <Tabs></Tabs>
          </header>

          <main>
            <Switch>
              <Route path='/' exact component={ Index }></Route>
              <Route path='/index' component={ Index }></Route>
              <Route path='/my' component={ My }></Route>
              <Route path="/ranking" component={ Ranking }></Route>
              <Route path='/find' component={ Find }></Route>
              <Redirect to='/'></Redirect>
            </Switch>
          </main>
          <footer className="footer">
            <Footer></Footer>
          </footer>
        </div>
      </Suspense>
      
    </Router>
    
  );
}

export default App;
