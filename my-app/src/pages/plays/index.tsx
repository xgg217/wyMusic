import React from 'react';
import Footer from './footer';
import Play from './play';

import styles from './index.module.css';

const Index: React.FC = () => {

  return (
    <section>
      {/* <Footer></Footer> */}
      <Play></Play>
    </section>
  )
}

Index.defaultProps = {
  // title: '未定义标题1' // 设置默认值
}

export default Index;