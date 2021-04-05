import { createStore, createLogger } from 'vuex'

export default createStore({
  state: {
    lists: [],
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
    loadLists(state, payload) {
      state.lists = payload;
    },
    selectList(state, payload) {
      state.selectedListId = payload.id;
    }
  },
  actions: {
    init({commit}) {
      fetch('http://localhost:3000/lists').then(res => res.json()).then(lists => {
          commit('loadLists', lists);
      });
    }
  },
  modules: {
  },
  plugins: [createLogger()]
})
