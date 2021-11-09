const INITALLOGO = 'home/INITALLOGO';
const CHANGEHISTORY = 'home/CHANGEHISTORY';

const initialState = {
  movelogo: false
};

// 从新生成state 来改变视图；
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case INITALLOGO:
      return {
        ...state,
        movelogo: false,
      };
    case CHANGEHISTORY:
      return {
        ...state,
        movelogo: true,
        text: action.text
      };
    default:
      return state;
  }
}

// 将此方法暴露给 props;
// changeRouter 是action生成器，生成了action对象，
export function changeRoute() {
  return {
    // type 是必须属性；
    type: CHANGEHISTORY,
    text: 'showDocs'
  };
}
export function initalLogo() {
  return {
    type: INITALLOGO
  };
}
