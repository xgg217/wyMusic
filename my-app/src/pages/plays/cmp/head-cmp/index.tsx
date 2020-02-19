import React,{ useState, useEffect, useRef } from 'react';

import styles from './index.module.css';

import leftSvg from 'assets/footer/head/leftSvg.svg'; // 返回
import fxSvg from 'assets/footer/head/fx30.svg'; // 分享

const Index: React.FC = () => {
  const [timeInd, setTimeInd] = useState();
  const [ind, setInd] = useState<number>(0);

  const pRef = useRef<HTMLParagraphElement | null>(null);
  const txtRef = useRef<HTMLDivElement | null>(null);

  /**
   * 歌曲名字动画设置
   */
  useEffect(() => {
    ( async () => {
      if(pRef.current && txtRef.current) {
        const pwidth = await ayasnGetPWidthFun(pRef.current);
        const divwidth = await ayasnGetPWidthFun(txtRef.current);

        const pwidthNum = Number.parseInt(pwidth as string);
        const divwidthNum = Number.parseInt(divwidth as string);

        if(pwidthNum > divwidthNum) {
          const widths = Math.floor(pwidthNum - divwidthNum);
          pRef.current.animate([
            { transform: `translateX(0px)` },
            { transform: `translateX(-${widths + 50}px)` },
          ], {
            duration: Math.floor((widths + 50) / 50) * 2000,
            iterations: Infinity,
            easing: 'ease'
          });
         
        }
      }
    })();
  }, []);

  const getPWidthFun = (ele:HTMLElement) => {
    const promise = new Promise((res, rej) => {
      clearTimeout(timeInd)
      const timeIndex = setTimeout(() => {
        setTimeInd(timeIndex);
        const eleWidth = window.getComputedStyle(ele, null).width;
        res(eleWidth);
      }, 50);
    })
    return promise.then(ele => {
      return ele
    })
  };

  /**
   * 获取元素真实宽度
   * @param ele 
   */
  const ayasnGetPWidthFun = async (ele:HTMLElement) => {
    const pwidth = await getPWidthFun(ele);
    console.log(pwidth)
    if((pwidth === 'auto') && ( ind <=5 )) {
      setInd(ind + 1);
      ayasnGetPWidthFun(ele);
    } else {
      return pwidth;
    }
  };


  return (
    <div className={ styles.warpp }>
      <div className={ styles.left }>
        <div className={ styles.imgs }>
          <img src={ leftSvg } alt="返回"/>
        </div>
        <div className={ styles.txt } ref={ txtRef }>
          <p ref={ pRef }>大sf士大夫顺sdf士大夫撒旦发射点方式发丰速递第三方速度fs f 夫11111111</p>
          <p>演唱者</p>
        </div>
      </div>
      <div className={ styles.rig } >
        <img src={ fxSvg } alt="分享"/>
      </div>
    </div>
  )
}

Index.defaultProps = {
  // title: '未定义标题1' // 设置默认值
}

export default Index;