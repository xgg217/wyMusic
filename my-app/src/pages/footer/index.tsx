import React from 'react'

import styles from './index.module.css';
// import listimg from 'assets/footer/list.svg';
import palyimg from 'assets/footer/paly.svg';
import ztimg from 'assets/footer/zt.svg';

const Index: React.FC = () => {

  return (
    <section className={ styles.warpp }>
      <div className={ styles.left }>
        <div className={ styles.imgs }>
          <img className={ styles.img } src="" alt="专辑"/>
        </div>
        <div className={ styles.content }>
          <h4>标士大夫十分士大夫大师傅士大夫第三方士大夫士大夫题</h4>
          <p>作者</p>
        </div>
      </div>
      <div className={ styles.right }>
        <div>
          <img className={ styles.img } src={ palyimg } alt="播放/暂停"/>
        </div>
        <div>
          <img className={ styles.img } src={ ztimg } alt="音乐列表"/>
        </div>
      </div>
    </section>
  )
}

Index.defaultProps = {
  // title: '未定义标题1' // 设置默认值
}

export default Index;