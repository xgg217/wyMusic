import React from 'react';
import { NavBar, Icon } from 'antd-mobile';

import styles from './index.module.css';

import TitleNameCmp from './../title-name';

import UlsCmp from './../ulli-cmp';

interface IProps {
  titleanme:string // 标题
  updataTime:number // 更新日期
  coverImgUrl:string // 海报图片
  shareCount:number // 分享次数
  commentCount:number // 评论次数
  goNextPage():void // 返回上一页-回调
  toastClick():void // 提示-回调
}

const Index: React.FC<IProps > = ({ titleanme, updataTime, coverImgUrl, shareCount, commentCount, goNextPage, toastClick }) => {

  return (
    <div className={ styles.warpper } style={{ backgroundImage: `url(${ coverImgUrl })` }}>
      <div className={ styles.head }>
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={ goNextPage }
          rightContent={[
            <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
            <Icon key="1" type="ellipsis" />,
          ]}></NavBar>
      </div>
      

      {/* 榜单名称 */}
      <TitleNameCmp name={ titleanme } updataTime={ updataTime } toastClick={ toastClick }></TitleNameCmp>

      {/* 评论 分享 下载 多选 */}
      <div className={ styles.uls }>
        <UlsCmp shareCount={ shareCount } commentCount={ commentCount }></UlsCmp>
      </div>
    </div>
  )
}

export default Index