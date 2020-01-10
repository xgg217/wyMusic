import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import styles from './index.module.css';

import recommend from 'assets/index/recommend.svg';
import song from 'assets/index/song.svg';
import ranking from 'assets/index/ranking.svg';
import radiostation from 'assets/index/radiostation.svg';
import live from 'assets/index/live.svg';

interface IProps extends RouteComponentProps {

}

const Index: React.FC<IProps> = ({ history, match }) => {

  const goRanking = ():void => {
    // console.log(history)
    // console.log(match)
    // history.push()
    const newUrl = match.url;
    history.push(`/ranking`);
  }

  return (
    <ul className={ styles.warpp }>
      <li className={ styles.lis }>
        <i className={ styles.imgs }>
          <img src={ recommend } alt=""/>
        </i>
        <p>每日推荐</p>
      </li>
      <li  className={ styles.lis }>
        <i className={ styles.imgs }>
          <img src={ song } alt=""/>
        </i>
        <p>歌单</p>
      </li>
      <li className={ styles.lis } onClick={ goRanking }>
        <i className={ styles.imgs }>
          <img src={ ranking } alt=""/>
        </i>
        <p>排行榜</p>
      </li>
      <li  className={ styles.lis }>
        <i className={ styles.imgs }>
          <img src={ radiostation } alt=""/>
        </i>
        <p>电台</p>
      </li>
      <li  className={ styles.lis }>
        <i className={ styles.imgs }>
          <img src={ live } alt=""/>
        </i>
        <p>直播</p>
      </li>
    </ul>
  )
}

export default withRouter(Index as any)