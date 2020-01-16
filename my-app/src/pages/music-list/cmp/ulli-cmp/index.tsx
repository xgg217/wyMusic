import React, { useMemo } from 'react';

import styles from './index.module.css';
import ly from 'assets/music-list/dx.svg';
import fx from 'assets/music-list/fx.svg';
import xz from 'assets/music-list/xz.svg';
import dx from 'assets/music-list/dxx.svg';

import { setCountType } from 'utils/fzm';

interface IProps {
  shareCount:number; // 分享次数
  commentCount:number // 评论次数
}

const Index: React.FC<IProps> = ({ shareCount, commentCount }) => {

  const strShareCount = useMemo(() => {
    return setCountType(shareCount);
  }, [shareCount]);

  const strCommentCount = useMemo(() => {
    return setCountType(commentCount);
  }, [ commentCount ])


  return (
    <ul className={ styles.warpper }>
      <li>
        <i>
          <img src={ ly } alt="留言"/>
        </i>
        <p>{ strCommentCount }</p>
      </li>
      <li>
        <i>
          <img src={ fx } alt="分享"/>
        </i>
        <p>{ strShareCount }</p>
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

export default React.memo(Index)