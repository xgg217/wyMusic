import React, { useState, useEffect } from 'react'
import NewMusicCmp from 'pages/index/cmp/new-music-cmp'
import styles from './index.module.css';

import { getNewsong } from 'api/index/index'

interface IProps {
  title?: string
}

interface MuiseList {
  id:number
  name:string
  picUrl:string

}

const Index: React.FC<IProps> = ({ title }) => {
  const [muiseList, setMuiseList] = useState<MuiseList[]>([])

  useEffect(() => {
    ( async () => {
      try {
        const res = await getNewsong();
        console.log(res);
        setMuiseList(res.result);
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])

  const newMuiseList = () => {
    const arr = [];
    const len = muiseList.length;
    for(let i = 0; i < len; i++) {
      if(i <= 2) {
        const element = <NewMusicCmp key={ muiseList[i].id } ids={ muiseList[i].id } title={ muiseList[i].name } imgUrl={ muiseList[i].picUrl }></NewMusicCmp>
        arr.push(element);
      } else {
        break;
      }
    }
    return arr;
  }

  return (
    <section>
      <div className={ styles.titles }>
        <h5> { title } </h5>
        <p></p>
      </div>
      <ul className={ styles.lists  }>
        { newMuiseList().length && newMuiseList() }
      </ul>
    </section>
    
  )
}

Index.defaultProps = {
  title: '未定义标题1' // 设置默认值
}

export default Index