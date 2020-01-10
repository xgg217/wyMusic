import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Switch, Route, RouteComponentProps, withRouter, Redirect, Link } from 'react-router-dom';

import styles from './index.module.css';



// const MusicList = lazy(() => import('./music-list'));

// const Nau = lazy(() => import('compontes/tabs'));



// 二级路由
const ChildIndex = lazy(() => import('./child/index'));
const ChildMy = lazy(() => import('./child/my'));
const ChildFind = lazy(() => import('./child/find'));


interface IProps extends RouteComponentProps {
}

const Index: React.FC<IProps> = ({ match }) => {
  const [urls, setUrls] = useState<string>('')
  console.log(match.url)
  

  // useEffect(() => {
  //   setUrls(match.url); // 当前页面路由地址
  // }, []);


  return (
    <Suspense fallback={ null }>
      <div className={ styles.warpp }>
        <header>
          {/* <Nau></Nau> */}
        </header>

        <Switch>
          <Route path='/index/index' component={ ChildIndex }></Route>
          <Route path='/index/my' component={ ChildMy }></Route>
          <Route path='/index/find' component={ ChildFind }></Route>
          <Redirect to='/index/index'></Redirect>
        </Switch>
      </div>
    </Suspense>
    
  )
}

export default withRouter(Index)