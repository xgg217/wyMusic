import React from 'react';

import styles from './index.module.css';

interface IProps {
}

const Index: React.FC<IProps > = () => {

  return (
    <section className={ styles.warpper }>
      音乐
    </section>
  )
}

export default Index