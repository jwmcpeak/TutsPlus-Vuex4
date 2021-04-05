import { createStore, createLogger } from 'vuex'
import http from './../utils/http';

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
    },
    getListItemIndexes(state) {
      return (itemId) => {
        let listIndex = -1;
        let itemIndex = -1;

        for (let ii = 0; ii < state.lists.length; ii++)
        for (let jj = 0; jj < state.lists[ii].items.length; jj++) {
          let item = state.lists[ii].items[jj];

          if (item.id === itemId) {
            listIndex = ii;
            itemIndex = jj;
            break;
          }

        }

        return {listIndex, itemIndex};
      };
    }
  },
  mutations: {
    loadLists(state, payload) {
      state.lists = payload;
    },
    selectList(state, payload) {
      state.selectedListId = payload.id;
    },
    updateItem(state, {text, status, listIndex, itemIndex}) {
      let item = state.lists[listIndex].items[itemIndex];

      item.text = text;
      item.status = status;
    }
  },
  actions: {
    init({commit}) {
      http.get('/lists').then(lists => {
          commit('loadLists', lists);
      });
    },
    updateItem({commit,getters}, item) {
      http.put(`/items/${item.id}`, item).then(() => {
        let indexes = getters.getListItemIndexes(item.id);


        commit('updateItem', {
          ...item,
          ...indexes
        });
      })
    }
  },
  modules: {
  },
  plugins: [createLogger()]
})
