import React, { useState, useEffect } from 'react'

import Lists from './../lists-cmp'

import styles from './index.module.css';

import { getPersonalized } from 'api/index/index';
import { setTextLength,setCountType } from 'utils/fzm';

interface IProps {
  title?: string
}

interface MuiseList {
  id:number
  name:string // 标题
  picUrl:string // 图片地址
  playCount:number // 播放次数
}

const Index: React.FC<IProps> = ({ title }) => {
  const [muiseList, setMuiseList] = useState<MuiseList[]>([]);

  // 获取推荐歌单
  useEffect(() => {
    (async () => {
      try {
        const res = await getPersonalized();
        console.log(res)
        setMuiseList(res.result);
      } catch (error) {
        console.log(error)
      }
    })();
  },[]);

  const setListsType = muiseList.map(item => {
    const textLen = setTextLength(item.name, 12);
    const count = setCountType(item.playCount);
    return (
      <Lists key={ item.id } ids={ item.id } playCount={ count } title={ textLen } imgUrl={ item.picUrl }></Lists>
    )
  })

  return (
    <section className={ styles.warpp }>
      <div className={ styles.titles }>
        <h5> { title } </h5>
        <p></p>
      </div>
      <ul className={ styles.lists }>
        { muiseList.length &&  setListsType }
      </ul>
    </section>
  )
}

Index.defaultProps = {
  title: '未定义标题1' // 设置默认值
}

export default Index;