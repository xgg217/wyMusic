import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { NavBar, Icon } from 'antd-mobile';


import GfbCmp from './cmp/gfb-cmp';
import OtherCmp from './cmp/other-cmp';

// import { getToplist } from 'api/rankin/rankin'
import useScrollTop from 'compontes/useScrollTop';

import styles from './index.module.css';

interface IProps extends RouteComponentProps {}


const Index: React.FC<IProps> = ({ history, location }) => {


  useScrollTop(location.pathname);

  // 返回上一页
  const goNextPage = () => {
    history.goBack();
  };


  return (
    <section className={ styles.warpp }>
      <div className={ styles.navs }>
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={ goNextPage }>排行榜</NavBar>
      </div>
     
      
      
      <div className={ styles.phb }>
        {/* 官方榜 */}
        {/* <GfbCmp titles="官方榜"></GfbCmp> */}

        {/* 其他榜单 */}
        <OtherCmp titles="官方榜"></OtherCmp>
      </div>


    </section>
    
  )
}

export default withRouter(Index as any)