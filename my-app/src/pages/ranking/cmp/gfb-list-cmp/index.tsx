import React from 'react';
import TitleImg from './../title-img-cmp'

import styles from './index.module.css';

interface IProps {
  id:number
  tracks:Array<Tracks> // 歌曲列表
  updateFrequency:string // 更新频率
  coverImgUrl:string // 图片
}

interface Tracks {
  first:string
  second:string
}

const Index: React.FC<IProps> = ({ id, tracks, updateFrequency, coverImgUrl, }) => {

  const tracksArr = tracks.map((item, index) => {
    return (
      <li key={ index }>
        {index + 1} { item.first }- { item.second }
      </li>
    )
  })

  return (
    <li className={ styles.warpp }>
      <TitleImg imgUrl={ coverImgUrl } updateFrequency={ updateFrequency }></TitleImg>
      <ul className={ styles.uls }>
        {/* <li></li>
        <li></li>
        <li></li> */}
        { tracksArr.length && tracksArr }
      </ul>
    </li>
  )
}

export default Index