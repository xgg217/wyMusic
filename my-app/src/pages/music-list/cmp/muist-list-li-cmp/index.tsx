import React from 'react';

import styles from './index.module.css';
import { IAllCount } from './../../type';

import UpImg from 'assets/list/up.svg'
import VideoImg from 'assets/list/video.svg'
import SelectsImg from 'assets/list/select.svg'

interface IProps extends IAllCount {
}

const Index: React.FC<IProps > = ({ id, index, name, ratio, ar, al, alia }) => {

  return (
    <li className={ styles.warpp }>
      <div className={ styles.left }>
        <div className={ styles.ind }>
          <p>{ index }</p>
          <div className={ styles.qx }>
            <div className={ styles.imgs }>
              <img src={ UpImg } alt="排序"/>
            </div>
            <span>{ ratio }%</span>
          </div>
        </div>
        <div className={ styles.name }>
          <div className={ styles.name_title }>
            <p>{ name }</p>
            <p className={ styles.name_clor }>{ alia }</p>
          </div>
          <div className={ styles.name_bot }>
            {/* <span>独家</span>
            <span>SQ</span> */}
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