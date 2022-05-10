
export default {

  namespace: 'example',

  state: {name:'Even',age:12},

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'add', payload});
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
    add(state,action) {
      console.log('reducers',state,action)
      return { ...state, ...action.payload };
    }
  },

};
