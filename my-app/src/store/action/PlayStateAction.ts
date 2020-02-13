export const SETPLAYSTATE = Symbol('set-play-state');

/**
 * 设置播放的状态，是全屏还是页尾
 * @param {*} user
 */
export function createSetLoginUserAction(state:string) {
  return {
    type: SETPLAYSTATE,
    playload: state
  }
}