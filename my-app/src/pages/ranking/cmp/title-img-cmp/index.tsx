import React from 'react';

import styles from './index.module.css';

interface IProps {
  imgUrl:string
  updateFrequency:string
}

const Index: React.FC<IProps> = () => {

  return (
    <div className={ styles.imgs }>
      <img className={ styles.img } src="http://t8.baidu.com/it/u=1484500186,1503043093&fm=79&app=86&f=JPEG?w=1280&h=853" alt=""/>
    </div>
  )
}

export default Index