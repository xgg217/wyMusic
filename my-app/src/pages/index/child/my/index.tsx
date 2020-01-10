import React, { Suspense, lazy } from 'react'

const MyListCmp = lazy(() => import('./cmp/my-list-cmp'));

const Index: React.FC =() => {
  return (
    <Suspense fallback={ null }>
      <div>
        <MyListCmp></MyListCmp>
      </div>
    </Suspense>
    
  )
}

export default Index;
