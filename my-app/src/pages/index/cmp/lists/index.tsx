import React from 'react'

import styles from './index.module.css';

interface IProps {
  // title?: string
}


const Index: React.FC<IProps> = () => {

  return (
    <li className={ styles.lis }>
      <div className={ styles.imgs }></div>
      <p>十分大师傅士大夫第三方</p>
    </li>
  )
}

Index.defaultProps = {
  // title: '未定义标题1' // 设置默认值
}

export default Index;