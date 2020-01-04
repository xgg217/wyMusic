import React, { Suspense, lazy } from 'react'

import styles from './index.module.css';

const Card = lazy(() => import('compontes/card'));


const Index: React.FC = () => {
  return (
    <Suspense fallback={ null }>
      <div className={ styles.warpp }>
        <Card></Card>
      </div>
    </Suspense>
    
  )
}

export default Index