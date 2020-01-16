import React, { useMemo } from 'react';

import Tsf from 'assets/music-list/ts.svg';
import styles from './index.module.css';
import { setData1  } from 'utils/fzm';

interface IProps {
  name:string; // 榜单名字
  updataTime:number // 更新时间
  toastClick():void
}

const Index: React.FC<IProps> = ({ name, updataTime, toastClick }) => {

  const strUpdataTime = useMemo(() => {
    return setData1(updataTime);
  }, [updataTime])

  return (
    <div className={ styles.rname }>
      <p>{ name }
        {/* <i onClick={ toastClick }>
          <img src={ Tsf } alt=""/>
        <i/> */}
        <i onClick={ toastClick }>
          <img src={ Tsf } alt=""/>
        </i>
      </p>
      <span>最近更新：{ strUpdataTime }</span>
    </div>
    
  )
}

export default React.memo(Index)