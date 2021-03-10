const outletModel = {
  namespace: 'global',

  state: {
    id: 0,
    name: '',
    code: '',
    groupId: 0,
    groupName: '',
    groupCode: '',
    step: 0,
    deferPrint: 0,
    startTicketId: { id: 0, name: '' },
    tillTicketId: { id: 0, name: '' },
  },

  effects: {
    *save({ payload }, { put }) {
      yield put({ type: 'saveOutlet', payload });
    },
  },
  reducers: {
    saveOutlet(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
  subscriptions: {
    setup({ history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/system/outlet/list') {
          // dispatch({
          //   type: 'query',
          // })
        }
      });
    },
  },
};

export default outletModel;
