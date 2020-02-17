import React from 'react';
import { NoticeBar, WhiteSpace, Icon } from 'antd-mobile';

import styles from './index.module.css';

import leftSvg from 'assets/footer/head/left.svg'; // 返回
import fxSvg from 'assets/footer/head/fx30.svg'; // 分享

const Index: React.FC = () => {

  return (
    <div className={ styles.warpp }>
      <div className={ styles.left }>
        <div className={ styles.imgs }>
          <img src={ leftSvg } alt="返回"/>
        </div>
        <div className={ styles.txt }>
          <p>士大夫士大夫士大夫sdfdsf 士大夫士大夫是否s是</p>
          <p>演唱者</p>
        </div>
      </div>
      <div className={ styles.rig } >
        <img src={ fxSvg } alt="分享"/>
      </div>
    </div>
  )
}

Index.defaultProps = {
  // title: '未定义标题1' // 设置默认值
}

export default Index;