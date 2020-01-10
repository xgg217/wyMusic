import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Switch, Route, RouteComponentProps, withRouter, Redirect, Link } from 'react-router-dom';

import styles from './index.module.css';

const Card = lazy(() => import('compontes/card'));
const Tabs = lazy(() => import('./tabs'));
const MusicList = lazy(() => import('./music-list'));
const NewMusic = lazy(() => import('./new-music'));

// 二级路由


interface IProps extends RouteComponentProps {
}

const Index: React.FC<IProps> = ({ match }) => {
  const [urls, setUrls] = useState<string>('')
  console.log(match.url)
  

  useEffect(() => {
    setUrls(match.url); // 当前页面路由地址
  }, []);


  return (
    <Suspense fallback={ null }>
      <div className={ styles.warpp }>
        {/* 轮播图 */}
        <Card></Card>

        <section className={ styles.tabs }>
          <Tabs></Tabs>
        </section>

        {/* 推荐歌单 */}
        <section className={ styles['music_list'] }>
          <MusicList title="推荐音乐"></MusicList>

          <NewMusic title="新歌"></NewMusic>
        </section>

      </div>
    </Suspense>
    
  )
}

export default withRouter(Index)