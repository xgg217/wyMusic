import React from 'react';
import { Progress, Button, WingBlank, WhiteSpace } from 'antd-mobile';

import styles from './index.module.css';

const Index: React.FC = () => {

  return (
    <div className={ styles.warpp }>
      <p>00:00</p>
      <div className={ styles.progress }>
        <Progress percent={40} position="normal" appearTransition />
      </div>
      <p>01:10</p>
    </div>
  )
}

Index.defaultProps = {
  // title: '未定义标题1' // 设置默认值
}

export default Index;