import React from 'react';
import { NavBar, Icon } from 'antd-mobile';


import GfbCmp from './cmp/gfb-cmp';
import OtherCmp from './cmp/other-cmp';

// import { getToplist } from 'api/rankin/rankin'

import styles from './index.module.css';



const Index: React.FC = () => {


  return (
    <section className={ styles.warpp }>
      <NavBar
        mode="light"
        icon={<Icon type="left" />}
        onLeftClick={() => console.log('onLeftClick')}>排行榜</NavBar>
      
      
      <div className={ styles.phb }>
        {/* 官方榜 */}
        {/* <GfbCmp titles="官方榜"></GfbCmp> */}

        {/* 其他榜单 */}
        <OtherCmp titles="官方榜"></OtherCmp>
      </div>


    </section>
    
  )
}

export default Index