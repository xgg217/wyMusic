import React, { Suspense, lazy } from 'react';
import { Switch, Route, RouteComponentProps, withRouter, Redirect } from 'react-router-dom';

import styles from './index.module.css';

import useScrollTop from 'compontes/useScrollTop';

// 导航栏
const Nav = lazy(() => import('compontes/tabs'));

// 二级路由
const ChildIndex = lazy(() => import('./child/index'));
const ChildMy = lazy(() => import('./child/my'));
const ChildFind = lazy(() => import('./child/find'));

interface IProps extends RouteComponentProps {
}

const Index: React.FC<IProps> = ({ match, location }) => {
  useScrollTop(location.pathname);

  return (
    <Suspense fallback={ null }>
      <div className={ styles.warpp }>
        <header>
          <Nav></Nav>
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