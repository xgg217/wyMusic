import React, {  Suspense, lazy } from 'react';

import styles from './index.module.css';

const HeadCmp = lazy(() => import('pages/plays/cmp/head-cmp'));
const BoxCmp = lazy(() => import('pages/plays/cmp/box-cmp'));
const OperationCmp = lazy(() => import('pages/plays/cmp/operation-cmp'));
const ProgressCmp = lazy(() => import('pages/plays/cmp/progress-cmp'));
const ControlCmp = lazy(() => import('pages/plays/cmp/control-cmp'));

const Index: React.FC = () => {

  return (
    <Suspense fallback={ null }>
      <div className={ styles.warpp }>
        <div className={ styles.box }>
          {/* 头部 */}
          <HeadCmp></HeadCmp>

          {/* 歌词 专辑图片显示 */}
          <BoxCmp></BoxCmp>

          {/* 收藏等操作 */}
          <OperationCmp></OperationCmp>

          {/* 进度条 */}
          <ProgressCmp></ProgressCmp>

          {/* 歌曲控制 */}
          <ControlCmp></ControlCmp>
        </div>
      </div>
      
    </Suspense>
    
  )
}

Index.defaultProps = {
  // title: '未定义标题1' // 设置默认值
}

export default Index;