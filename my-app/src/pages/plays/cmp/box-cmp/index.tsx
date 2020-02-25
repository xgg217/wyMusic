import React from 'react';

import styles from './index.module.css';

import cdPng from 'assets/footer/cd/cd.png';
import swithSvg from 'assets/footer/cd/swith.png';

const Index: React.FC = () => {

  return (
    <div className={ styles.warpp }>
      <div className={ styles.swith }>
        <div className={ styles['switch_sets'] }>
          <img src={ swithSvg } alt="指针"/>
        </div>
      </div>
      <div className={ styles.cd }>
        <img src={ cdPng } alt="CD"/>
        <div className={ styles.imgs }></div>
      </div>
    </div>
  )
}

Index.defaultProps = {
  // title: '未定义标题1' // 设置默认值
}

export default Index;