import React, { Suspense, lazy } from 'react'

import styles from './index.module.css';

const Index: React.FC = () => {
  return (
    <Suspense fallback={ null }>
      <div className={ styles.warpp }>
       111
      </div>
    </Suspense>
    
  )
}

export default Index