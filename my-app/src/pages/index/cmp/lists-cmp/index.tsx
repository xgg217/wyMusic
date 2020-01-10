// 排行榜
import React from 'react'

import styles from './index.module.css';

import play from 'assets/index/play.svg'

interface IProps {
  ids:number
  title: string // 标题
  imgUrl:string // 图片
  playCount:string // 播放次数
}


const Index: React.FC<IProps> = ({ title, imgUrl, playCount }) => {

  return (
    <li className={ styles.lis }>
      <div className={ styles.imgs }>
        <div className={ styles['play_count'] }>
          <i>
            <img src={ play } alt="播放"/>
          </i>
          <p>{ playCount }</p>
        </div>
        <img src={ imgUrl } alt="图片"/>
      </div>
      <p className={ styles.txt }>{ title }</p>
    </li>
  )
}

Index.defaultProps = {
  // title: '未定义标题1' // 设置默认值
}

export default Index;