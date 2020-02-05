import React from 'react';

import styles from './index.module.css';

// import MuistListCmp from './../muist-list-cmp'
import MuistListLiCmp from './../muist-list-li-cmp'

import PlayImg from 'assets/list/play.svg'

import { IAllCount } from './../../type';
import { setCountType } from 'utils/fzm'

interface IProps {
  subscribedCount:number;
  allCount:IAllCount[]
}

const Index: React.FC<IProps > = ({ subscribedCount, allCount }) => {

  const IAllCountMap = allCount.map((item, index) => {
    return (
      <MuistListLiCmp
        key={ item.id }
        id={ item.id }
        name={ item.name }
        index={ index + 1 }
        ratio={ item.ratio }
        ar={ item.ar }
        al={ item.al }
        alia={ item.alia }
        ></MuistListLiCmp>
    )
  })
  return (
    <section className={ styles.warpper }>
      <div className={ styles.head }>
        <div className={ styles.head_left }>
          <div className={ styles.imgs }>
            <img src={ PlayImg } alt="播放"/>
          </div>
          <p className={ styles.paay_all }>播放全部<span>(共{ allCount.length }首)</span></p>
        </div>
        <div className={ styles.head_right }>
          <p>+</p>
          <p>收藏({ setCountType(subscribedCount) })</p>
        </div>
      </div>

      {/* 播放列表 */}
      <ul className={ styles.uls }>
        {/* <MuistListLiCmp IAllCount={  }></MuistListLiCmp> */}
        { IAllCountMap }
      </ul>

    </section>
  )
}

export default Index