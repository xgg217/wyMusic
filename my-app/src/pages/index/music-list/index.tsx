import React from 'react'

import Lists from './../cmp/lists'

import styles from './index.module.css';

interface IProps {
  title?: string
}


const Index: React.FC<IProps> = ({ title }) => {
  console.log(title)

  return (
    <section>
      <div className={ styles.titles }>
        <h5> { title } </h5>
        <p></p>
      </div>
      <ul className={ styles.lists }>
        <Lists></Lists>
        <Lists></Lists>
        <Lists></Lists>
        <Lists></Lists>
        <Lists></Lists>
        <Lists></Lists>
      </ul>
      

    </section>
  )
}

Index.defaultProps = {
  title: '未定义标题1' // 设置默认值
}

export default Index;