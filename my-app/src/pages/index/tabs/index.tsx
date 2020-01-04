import React from 'react'

import styles from './index.module.css';


const Index: React.FC = () => {
  return (
    <ul className={ styles.warpp }>
      <li className={ styles.lis }>
        <i></i>
        <p>每日推荐</p>
      </li>
      <li  className={ styles.lis }>
        <i></i>
        <p>歌单</p>
      </li>
      <li  className={ styles.lis }>
        <i></i>
        <p>排行榜</p>
      </li>
      <li  className={ styles.lis }>
        <i></i>
        <p>电台</p>
      </li>
      <li  className={ styles.lis }>
        <i></i>
        <p>直播</p>
      </li>
    </ul>
  )
}

export default Index