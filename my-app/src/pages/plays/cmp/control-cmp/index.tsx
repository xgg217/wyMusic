import React from 'react';

import styles from './index.module.css';

import playSvg from 'assets/footer/play72.svg'; // 播放
import ztSvg from 'assets/footer/zt72.svg'; // 暂停
import sSvg from 'assets/footer/s28.svg'; // 上一曲
import xSvg from 'assets/footer/x28.svg'; // 下一曲
import listSvg from 'assets/footer/list28.svg'; // 列表
import sxSvg from 'assets/footer/sx30.svg'; // 列表循环
import sjSvg from 'assets/footer/sj30.svg'; // 随机播放

const Index: React.FC = () => {

  return (
    <div className={ styles.warpp }>
      <ul className={ styles.box }>
        <li>模式</li>
        <li>
          <img src={ sSvg } alt="上一曲"/>
        </li>
        <li>
          <img src={ ztSvg } alt=""/>
        </li>
        <li>
          <img src={ xSvg } alt="下一曲"/>
        </li>
        <li>
          <img src={ listSvg } alt="列表"/>
        </li>
      </ul>
    </div>
  )
}

Index.defaultProps = {
  // title: '未定义标题1' // 设置默认值
}

export default Index;