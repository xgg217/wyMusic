import React, {  Suspense, lazy } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route } from 'react-router-dom';

const Ranking = lazy(() => import('pages/ranking')); // 排行榜
const MusicList = lazy(() => import('pages/music-list')); // 榜单列表
const PlayPages = lazy(() => import('pages/play')); // 榜单列表

const Index = lazy(() => import('pages/index'));
// const Find = lazy(() => import('pages/find'));
const Plays = lazy(() => import('pages/plays'));
// const Footer = lazy(() => import('pages/play'));

const App: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={ null }>
        <div className="App">
          <main>
            <Switch>
              <Route path='/index' component={ Index }></Route>
              <Route path="/ranking" component={ Ranking }></Route>
              <Route path="/list/:id" component={ MusicList }></Route>
              <Route path="/play" component={ PlayPages }></Route>
              {/* <Route path='/find' component={ Find }></Route> */}
              <Redirect to='/index/index'></Redirect>
            </Switch>
            
          </main>
          <footer className="footer">
            {/* <Footer></Footer> */}
            <Plays></Plays>
          </footer>
        </div>
      </Suspense>
    </Router>
  );
}

export default App;
