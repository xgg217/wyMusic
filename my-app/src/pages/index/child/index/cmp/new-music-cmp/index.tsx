import React from 'react'

import styles from './index.module.css';

interface IProps {
  ids:number
  title: string // 标题
  imgUrl:string // 图片
}


const Index: React.FC<IProps> = ({ title, imgUrl }) => {

  return (
    <li className={ styles.lis }>
      <div className={ styles.imgs }>
        <img src={ imgUrl } alt="图片"/>
      </div>
      <div className={ styles.txt }>
        <p>{ title }</p>
        <p>{ title }</p>
      </div>
    </li>
  )
}

Index.defaultProps = {
  // title: '未定义标题1' // 设置默认值
}

export default Index;