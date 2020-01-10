import React, { useState, useEffect, Suspense, lazy } from 'react';

import styles from './index.module.css';

const Card = lazy(() => import('compontes/card'));
const Tabs = lazy(() => import('pages/index/cmp/tabs-cmp'));
const NewMusic = lazy(() => import('pages/index/cmp/tj-cmp'));

const Index: React.FC =() => {
  return (
    <Suspense fallback={ null }>
      <section>
        {/* 轮播图 */}
        <Card></Card>

        <section className={ styles.tabs }>
          <Tabs></Tabs>
        </section>

        <NewMusic title="新歌"></NewMusic>
      </section>
    </Suspense>
  )
}

export default Index;