import React, { Suspense, lazy } from 'react'

const Card = lazy(() => import('compontes/card'));

export default function index() {
  return (
    <Suspense fallback={ null }>
      <div>
        <Card></Card>
      </div>
    </Suspense>
    
  )
}