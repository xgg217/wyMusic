import React from 'react';

import styles from './index.module.css';

const Index: React.FC = () => {

  return (
    <div className={ styles.warpp }>
      111
    </div>
  )
}

Index.defaultProps = {
  // title: '未定义标题1' // 设置默认值
}

export default Index;