import React, { Suspense, lazy } from 'react'

const MyListCmp = lazy(() => import('./cmp/my-list-cmp'));

export default function index() {
  return (
    <Suspense fallback={ null }>
      <div>
        <MyListCmp></MyListCmp>
      </div>
    </Suspense>
    
  )
}
