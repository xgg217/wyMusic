import React from 'react'

import { List } from 'antd-mobile';

import add from 'assets/footer/add.svg'
import newplay from 'assets/footer/newplay.svg'

// import styles from './index.module.css';

const Item = List.Item;

const Index: React.FC = () => {

  return (
    <div>
      <List>
      <Item thumb={ newplay } onClick={() => {}} arrow="horizontal">
        正在播放(1)
      </Item>

      <Item thumb={ add } onClick={() => {}} arrow="horizontal">
        我的收藏
      </Item>
      </List>

     
    </div>
  )
}

Index.defaultProps = {
  // title: '未定义标题1' // 设置默认值
}

export default Index;