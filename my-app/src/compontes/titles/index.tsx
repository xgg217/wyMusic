import React from 'react';

import styles from './index.module.css';

interface IProps {
  titles:string
}

const Index: React.FC<IProps> = ({ titles }) => {
  return (
    <div>
      <h5 className={ styles.h5 }>{ titles }</h5>
    </div>
  )
}

Index.defaultProps= {
  titles: '榜单标题'
}

export default Index