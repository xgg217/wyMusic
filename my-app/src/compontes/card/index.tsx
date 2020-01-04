import React, { useState, useEffect } from 'react'

import { Carousel, WingBlank  } from 'antd-mobile';

import { getBanner } from 'api/index/index';

import styles from './index.module.css';

interface Banners {
  pic:string
  targetId:number,
  typeTitle:string
}

const Index: React.FC = () => {
  const [imgList, setImgList] = useState<Banners[]>([]);
  const [imgHeight , setImgHeight ] = useState('140')

  // 轮播图
  useEffect(() => {
    (async () => {
      const res = await getBanner();

      setImgList(res.data.banners);
    })();
  },[]);

  const cardImgList = imgList.map(item => {
    return (
      <div key={ item.targetId } className={ styles.imgs } >
        <img
          style={{ width: '100%' }}
          className={ styles.img }
          src={ item.pic }
          alt={ item.typeTitle }
          onLoad={() => {
            window.dispatchEvent(new Event('1111'));
            setImgHeight('auto')
          }} />
      </div>
    )
  })
  console.log(cardImgList)

  return (
    <div className={ styles.warpp }>
      <WingBlank>
        <Carousel
          frameOverflow="hidden"
          autoplay
          infinite>
          { (cardImgList.length > 0) && cardImgList }
        </Carousel>
      </WingBlank>
      
    </div>
  )
}

export default Index
