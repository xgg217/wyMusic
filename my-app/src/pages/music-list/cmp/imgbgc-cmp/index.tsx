import React, { useState, useEffect } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { NavBar, Icon } from 'antd-mobile';

import Tsf from 'assets/music-list/ts.svg';

import styles from './index.module.css';
import useScrollTop from 'compontes/useScrollTop';

import UlsCmp from './../ulli-cmp';

import { getList  } from 'api/lists/index';
import { setData1  } from 'utils/fzm';

interface IProps extends RouteComponentProps {
}

interface AllData {

}

interface IParams {
  idx?:string
}

const Index: React.FC<IProps > = ({ history, location, match }) => {
  const [titleanme, setTitleanme] = useState<string>(''); // 标题
  const [updataTime, setUpdataTime] = useState<string>(''); // 更新日期
  const [coverImgUrl, setCoverImgUrl] = useState<string>(''); // 海报图片
  const [shareCount, setShareCount] = useState<number>(0); // 分享次数
  const [commentCount, setCommentCount] = useState<number>(0); // 评论次数

  // 滚动条复原
  useScrollTop(location.pathname);

  useEffect(() => {
    (async () => {
      const obj:IParams = match.params;
      const res = await getList(obj.idx)

      const data = res.playlist;
      
      setTitleanme(data.name); // 标题

      const updataTime = setData1(data.updateTime)
      console.log(res)
      setUpdataTime(updataTime); // 更新日期

      setCoverImgUrl(data.coverImgUrl); // 海报图片

      setShareCount(data.shareCount);

      setCommentCount(data.commentCount);
    })();
  }, [])

  // 返回上一页
  const goNextPage = () => {
    history.goBack();
  };
  return (
    <div className={ styles.warpper } style={{ backgroundImage: `url(${ coverImgUrl })` }}>
      <NavBar
        mode="light"
        icon={<Icon type="left" />}
        onLeftClick={ goNextPage }
        rightContent={[
          <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
          <Icon key="1" type="ellipsis" />,
        ]}></NavBar>

      {/* 榜单名称 */}
      <div className={ styles.rname }>
        <p>{ titleanme }
          <i>
            <img src={ Tsf } alt=""/>
          </i>
        </p>
        <span>最近更新：{ updataTime }</span>
      </div>

      {/* 评论 分享 下载 多选 */}
      <div className={ styles.uls }>
        <UlsCmp ></UlsCmp>
      </div>
    </div>
    
  )
}

export default withRouter(Index)