import React, { Suspense, lazy } from 'react'

import styles from './index.module.css';

const Card = lazy(() => import('compontes/card'));
const Tabs = lazy(() => import('./tabs'));
const Recommend = lazy(() => import('./recommend'));


const Index: React.FC = () => {
  return (
    <Suspense fallback={ null }>
      <div className={ styles.warpp }>
        {/* 轮播图 */}
        <Card></Card>

        <section className={ styles.tabs }>
          <Tabs></Tabs>
        </section>

        {/* 推荐歌单 */}
        <Recommend></Recommend>
      </div>
    </Suspense>
    
  )
}

export default Index