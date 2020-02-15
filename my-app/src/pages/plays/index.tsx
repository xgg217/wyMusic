import React from 'react';
import { connect } from 'react-redux';
import { createSetLoginUserAction } from 'store/action/PlayStateAction'

import Footer from './footer';
import Play from './play';

// import styles from './index.module.css';

interface IPlay {
  playState:PlayState // 全屏或 非全屏
  onSetPlayState:(state:string)=>void
}

type PlayState = 'no-full' | 'full';

const Indexs: React.FC<IPlay> = ({ playState, onSetPlayState }) => {

  /**
   * 进去全屏 状态
   */
  const goPlayPage = () => {
    onSetPlayState('full');
  }


  return (
    <section>
      {
        playState === 'no-full' ?
        (<Footer goPlayPage={ goPlayPage }></Footer>) :
        ( <Play></Play> )
      }
      {/* <Footer></Footer> */}
    </section>
  )
}

// Index.defaultProps = {
//   // title: '未定义标题1' // 设置默认值
// }

/**
 * 将仓库的状态映射到当前数据中
 * @param {*} state
 */
function mapStateToProps(state:any) {
  return {
    playState: state.playState
  }
}

/**
 * 映射事件处理函数
 * @param {*} dispatch
 */
function mapDispatchToProps(dispatch:any) {
  return {
    onSetPlayState(state:string) {
      // 进入全屏状态
      dispatch(createSetLoginUserAction(state));
    }
  }
}

// 返回一个高阶组将
const hoc = connect(mapStateToProps, mapDispatchToProps);
export default hoc(Indexs);