import React, { useState, useEffect } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import styles from './index.module.css'

import Titles from 'compontes/titles';

import TitleImg from './../title-img-cmp'

import { getToplist, gettToplistTetail } from 'api/rankin/rankin';

interface IProps extends RouteComponentProps {
  titles:string
}

interface imgArr {
  id:number
  coverImgUrl:string
  updateFrequency:string
}



const Index: React.FC<IProps> = ({ titles, history }) => {
  const [imgArr, setImgArr] = useState<imgArr[]>([]);

  // 所有榜单
  useEffect(() => {
    (async () => {
      const res = await gettToplistTetail();
      console.log(res)
      setImgArr(res.list);
    })();
  }, []);

  // 跳转到路由榜单
  const goMusicList = (index:number) => {
    console.log(index)
    history.push(`/list:${index}`)
  }

  const imgLIst = imgArr.map((item:imgArr, index) => {
    return (
      <li key={ item.id } className={ styles.lis } onClick={ () => {goMusicList(index)} }>
        <TitleImg
          idx={ index }
          imgUrl={ item.coverImgUrl }
          updateFrequency={ item.updateFrequency }></TitleImg>
      </li>
    )
  })

  return (
    <section>
      <Titles titles={ titles }></Titles>
      <ul className={ styles.blokcs }>
        { imgLIst.length && imgLIst }
      </ul>
    </section>
  )
}

export default withRouter(Index)