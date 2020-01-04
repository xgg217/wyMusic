import React from 'react'
import {
  NavLink } from 'react-router-dom';

import find from 'assets/tab/find1.svg';
import hong from 'assets/tab/hong1.svg';
import my from 'assets/tab/my1.svg';

import styles from './index.module.css';

export default function index() {

  const bgc = {
    findUrl: `url(${find})`,
    hongUrl: `url(${hong})`,
    myUrl: `url(${my})`,
  };

  return (
    <ul className={ styles.uls }>
      <li className={ styles['ul_li'] }>
        <NavLink
          to="/my"
          exact
          className={ `${styles.my} ${styles.linka}` }
          activeStyle={ { backgroundImage: bgc.myUrl } }>
        </NavLink>
      </li>
      <li className={ styles['ul_li'] }>
        <NavLink
          to="/"
          exact
          className={ `${styles.hong} ${styles.linka}` }
          activeStyle={ { backgroundImage: bgc.hongUrl } }
          ></NavLink>
      </li>
      <li className={ styles['ul_li'] }>
        <NavLink
          to="/find"
          exact
          className={ `${styles.find} ${styles.linka}` }
          activeStyle={ { backgroundImage: bgc.findUrl } }
          ></NavLink>
      </li>
    </ul>
  )
}
