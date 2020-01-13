import React, { useState, useEffect } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { NavBar, Icon } from 'antd-mobile';

import styles from './index.module.css';
import useScrollTop from 'compontes/useScrollTop';

import UlsCmp from './../ulli-cmp';

import { getList  } from 'api/lists/index';

interface IProps extends RouteComponentProps {
}

interface AllData {

}

interface IParams {
  idx?:string
}

const Index: React.FC<IProps > = ({ history, location, match }) => {
  const [titleanme, setTitleanme] = useState<string>('')



  // 滚动条复原
  useScrollTop(location.pathname);

  useEffect(() => {
    (async () => {
      const obj:IParams = match.params;
      const res = await getList(obj.idx)
      
      setTitleanme(res.playlist.name); // 标题


      console.log(res)
    })();
  }, [])

  // 返回上一页
  const goNextPage = () => {
    history.goBack();
  };
  return (
    <div className={ styles.warpper } style={{ backgroundImage: 'url(http://t8.baidu.com/it/u=3571592872,3353494284&fm=79&app=86&f=JPEG?w=1200&h=1290)' }}>
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
        <p>飙升榜</p>
        <span>最近更新：1月13日</span>
        <i></i>
      </div>

      {/* 评论 分享 下载 多选 */}
      <div className={ styles.uls }>
        <UlsCmp></UlsCmp>
      </div>
    </div>
    
  )
}

export default withRouter(Index)