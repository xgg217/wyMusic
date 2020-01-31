import React from 'react';

import MuistListLiCmp from './../muist-list-li-cmp'
import styles from './index.module.css';

interface IProps {
}

const Index: React.FC<IProps > = () => {

  return (
    <section className={ styles.warpper }>
      <ul>
        <MuistListLiCmp></MuistListLiCmp>
        <MuistListLiCmp></MuistListLiCmp>
        <MuistListLiCmp></MuistListLiCmp>
      </ul>
    </section>
  )
}

export default Index