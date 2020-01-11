import React from 'react';

import styles from './index.module.css';

interface IProps {
  imgUrl:string
  updateFrequency:string
}

const Index: React.FC<IProps> = ({ imgUrl, updateFrequency }) => {
  return (
    <div className={ styles.imgs }>
      <img className={ styles.img } src={ imgUrl } alt=""/>
      <p>{ updateFrequency }</p>
    </div>
  )
}

export default Index