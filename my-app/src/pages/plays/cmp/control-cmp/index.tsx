import React,{ useState } from 'react';
import { Toast } from 'antd-mobile';

import styles from './index.module.css';

import playSvg from 'assets/footer/play72.svg'; // 播放
import ztSvg from 'assets/footer/zt72.svg'; // 暂停
import sSvg from 'assets/footer/s28.svg'; // 上一曲
import xSvg from 'assets/footer/x28.svg'; // 下一曲
import listSvg from 'assets/footer/list28.svg'; // 列表
import sxSvg from 'assets/footer/sx30.svg'; // 列表循环
import sjSvg from 'assets/footer/sj30.svg'; // 随机播放
import dqSvg from 'assets/footer/dq30.svg'; // 单曲循环


const Index: React.FC = () => {
  // 播放模式
  const [playSate, setPlaySate] = useState<number>(0);
  const [msSrc, setMsSrc] = useState(sxSvg); // 当前状态
  const [msTitle, setMsTitle] = useState('列表循环'); // 提示语

  // 播放/暂停
  // const [start, setStart] = useState(initialState)



  const playSateAll = ['sxSvg', 'sjSvg', 'dqSvg'];

  const playSateMap = new Map([
    ['sxSvg', {alt: '列表循环', src: sxSvg}],
    ['sjSvg', {alt: '随机播放', src: sjSvg}],
    ['dqSvg', {alt: '单曲循环', src: dqSvg}],
  ]);

  /**
   * 播放模式设置
   * 返回下一个播放 状态
   *  @param ind 当前状态的索引
   */
  const getPlayInd = (index:number):number => {
    const len = playSateAll.length;
    const nextIndex = index + 1;
    console.log(nextIndex)
    console.log(len)
    if(nextIndex >= len) {
      return 0;
    } else {
      return nextIndex;
    }
  }

  /**
   * 播放模式设置
   * @param ind 当前状态的索引
   */
  const onSetPlayPattern = (ind:number) => {
    const index = getPlayInd(ind);

    setPlaySate(index); // 下一个状态的索引
    const playTxt =  playSateAll[index]; // 当前状态

    // 当前状态
    const playObj = playSateMap.get(playTxt) || { alt: '列表循环', src: sxSvg };
    setMsSrc(playObj.src);
    setMsTitle(playObj.alt);

    Toast.info(playObj.alt, 1, undefined, false); // 提示不出现遮罩层
  };


  /**
   * 播放设置
   * 开始进行 播放/暂停
   */
  const onPlay = () => {

  };


  return (
    <div className={ styles.warpp }>
      <ul className={ styles.box }>
        <li onClick={ () => { onSetPlayPattern(playSate)} }>
          <img src={ msSrc } alt={ msTitle } />
        </li>
        <li>
          <img src={ sSvg } alt="上一曲"/>
        </li>
        <li onClick={ () => {  } }>
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