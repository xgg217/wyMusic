import React from 'react';

import styles from './index.module.css';

import xingSvg from 'assets/footer/sc/xing35.svg'; // 心
import redxingSvg from 'assets/footer/sc/renxing35.svg'; // 红心
import xzSvg from 'assets/footer/sc/xz35.svg'; // 下载
import ldSvg from 'assets/footer/sc/ld.svg'; // 铃铛
import lySvg from 'assets/footer/sc/ly35.svg'; // 留言
import gdSvg from 'assets/footer/sc/gd35.svg'; // 更多

const Index: React.FC = () => {

  return (
    <div className={ styles.warpp }>
      <ul>
        <li>
          <img src={ redxingSvg } alt="未下载"/>
        </li>
        <li>
          <img src={ xzSvg } alt="下载"/>
        </li>
        <li>
          <img src={ ldSvg } alt="铃铛"/>
        </li>
        <li className={ styles.ly }>
          <img src={ lySvg } alt="留言"/>
          <p className={ styles.sl }>12+</p>
        </li>
        <li>
          <img src={ gdSvg } alt="更多"/>
        </li>
      </ul>
    </div>
  )
}

Index.defaultProps = {
  // title: '未定义标题1' // 设置默认值
}

export default Index;