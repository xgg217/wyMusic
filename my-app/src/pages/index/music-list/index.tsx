import React from 'react'

import styles from './index.module.css';

interface IProps {
  children: JSX.Element
}



const Index: React.FC<IProps> = ({ children }) => {
  console.log(children)

  return (
    <section>
      { children }
    </section>
  )
}

// Index.defaultProps = {
//   isBool: false // 设置默认值
// }

export default Index;