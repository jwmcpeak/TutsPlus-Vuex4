import { createStore, createLogger } from 'vuex'

export default createStore({
  state: {
    lists: [{
        id: 1,
        name: 'First Hardcoded List',
        items: [{
          id: 1,
          text: 'This is the first item in the first list',
          status: true
        },{
          id: 2,
          text: 'This is the second item in the first list',
          status: false
        }]
    },{
        id: 2,
        name: 'Second Hardcoded List',
        items: [{
          id: 3,
          text: 'This is the first item in the second list',
          status: true
        },{
          id: 4,
          text: 'This is the second item in the second list',
          status: false
        }]
    }],
    selectedListId: -1
  },
  getters: {
    selectedItems(state) {
        let list = state.lists.find(l => l.id === state.selectedListId);

        if (list) {
            return list.items;
        }

        return [];
    }
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
