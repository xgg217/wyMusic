import React from 'react';
import { NavBar, Icon } from 'antd-mobile';


import GfbCmp from './cmp/gfb-cmp'

// import { getToplist } from 'api/rankin/rankin'

import styles from './index.module.css';



const Index: React.FC = () => {

  // useEffect(() => {
  //   (async () => {
  //     const res = await getToplist();
  //     console.log(res)
  //   })();
  // })


  return (
    <section className={ styles.warpp }>
      <NavBar
        mode="light"
        icon={<Icon type="left" />}
        onLeftClick={() => console.log('onLeftClick')}>排行榜</NavBar>
      
      
      <div className={ styles.phb }>
        {/* 官方榜 */}
        <GfbCmp titles="官方榜"></GfbCmp>
      </div>


    </section>
    
  )
}

export default Index