import { createStore } from 'vuex'

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
    }]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
