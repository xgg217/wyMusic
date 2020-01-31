import React from 'react';

import styles from './index.module.css';

import UpImg from 'assets/list/up.svg'
import VideoImg from 'assets/list/video.svg'
import SelectsImg from 'assets/list/select.svg'

interface IProps {
}

const Index: React.FC<IProps > = () => {

  return (
    <li className={ styles.warpp }>
      <div className={ styles.left }>
        <div className={ styles.ind }>
          <p>1</p>
          <div className={ styles.qx }>
            <div className={ styles.imgs }>
              <img src={ UpImg } alt="排序"/>
            </div>
            <span>12%</span>
          </div>
        </div>
        <div className={ styles.name }>
          <div className={ styles.name_title }>
            <p>目前士士</p>
            <p className={ styles.name_clor }>(原夫)</p>
          </div>
          <div className={ styles.name_bot }>
            <span>独家</span>
            <span>SQ</span>
            <span className={ `${styles.name_clor} ${styles.max_nae}` }>李荣浩-麻雀大师傅地方的风格</span>
          </div>
        </div>
      </div>
      <div className={ styles.right }>
        <div className={ styles.video_imgs }>
          <img src={ VideoImg } alt=""/>
        </div>
        <div className={ `${styles.video_imgs} ${ styles.ml }` }>
          <img src={ SelectsImg } alt=""/>
        </div>
      </div>
    </li>
  )
}

export default Index