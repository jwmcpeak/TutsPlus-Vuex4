import { createStore, createLogger } from 'vuex'

export default createStore({
  state: {
    lists: [{
        id: 1,
        name: 'First Hardcoded List',
        items: []
    },{
        id: 2,
        name: 'Second Hardcoded List',
        items: []
    }],
    selectedListId: -1
  },
  mutations: {
    selectList(state, payload) {
      state.selectedListId = payload.id;
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [createLogger()]
})
