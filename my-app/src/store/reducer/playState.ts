import { SETPLAYSTATE } from 'store/action/PlayStateAction';

/**
 * full 全屏
 * no-full 不是全屏
 */
const initialState = 'no-full';

interface ActionType {
  type:Symbol;
  payload:string
}

export default(state = initialState, { type, payload }:ActionType):string => {
  switch (type) {
    case SETPLAYSTATE:
      return payload;
    default:
      return state;
  }
}
