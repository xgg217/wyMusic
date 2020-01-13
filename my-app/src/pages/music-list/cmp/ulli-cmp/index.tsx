import React from 'react';

import styles from './index.module.css';
import ly from 'assets/music-list/dx.svg';
import fx from 'assets/music-list/fx.svg';
import xz from 'assets/music-list/xz.svg';
import dx from 'assets/music-list/dxx.svg';

interface IProps {
}

const Index: React.FC<IProps> = () => {

  return (
    <ul className={ styles.warpper }>
      <li>
        <i>
          <img src={ ly } alt="留言"/>
        </i>
        <p>16.5万</p>
      </li>
      <li>
        <i>
          <img src={ fx } alt="分享"/>
        </i>
        <p>7755</p>
      </li>
      <li>
        <i>
          <img src={ xz } alt="下载"/>
        </i>
        <p>下载</p>
      </li>
      <li>
        <i>
          <img src={ dx } alt="多选"/>
        </i>
        <p>多选</p>
      </li>
    </ul>
    
  )
}

export default Index