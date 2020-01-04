import React from 'react'
import styles from './index.module.css';

import Navs from 'compontes/nav'

import menu from 'assets/tab/menu.svg';
import seek from 'assets/tab/seek.svg'

export default function index() {
  return (
    <nav className={ styles.nav }>
      <div className={ styles.menu }>
        <img src={ menu } alt="菜单" />
        {/* <Menu></Menu> */}
      </div>
      <Navs></Navs>
      <div className={ styles.seek }>
        <img src={ seek } alt="搜索" />
      </div>
    </nav>
  )
}
