import React from 'react';

import styles from './index.module.css';

import PlayImg from 'assets/list/play.svg'

interface IProps {
}

const Index: React.FC<IProps > = () => {

  return (
    <section className={ styles.warpper }>
      <div className={ styles.head }>
        <div className={ styles.head_left }>
          <div className={ styles.imgs }>
            <img src={ PlayImg } alt="播放"/>
          </div>
          <p className={ styles.paay_all }>播放全部<span>(共100首)</span></p>
        </div>
        <div className={ styles.head_right }>
          <p>+</p>
          <p>收藏(32.2万)</p>
        </div>
      </div>
    </section>
  )
}

export default Index