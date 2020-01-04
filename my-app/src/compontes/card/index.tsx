import React, { useState, useEffect } from 'react'

import { Carousel, WingBlank } from 'antd-mobile';

import { getBanner } from 'api/index/index';

import styles from './index.module.css';

const Index: React.FC = () => {
  const [imgList, setImgList] = useState([])

  // 轮播图
  useEffect(() => {
    (async () => {
      const res = await getBanner();
      console.log(res)
    })();
  },[]);

  // const cardImgList = 

  return (
    <div className={ styles.warpp }>
      {/* <Carousel className="styles['space-carousel'"
        frameOverflow="visible"
        cellSpacing={10}
        slideWidth={0.8}
        autoplay
        infinite>
      </Carousel> */}
      111
    </div>
  )
}

export default Index
