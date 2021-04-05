let listId = 1;
let itemId = 1;

module.exports = {
  lists: [{
    id: listId++,
    name: 'My First List',
    items:[{
      id: itemId++,
      text: 'Starting Item',
      status: false
    }]
  }, {
    id:listId++,
    name: 'Guitar Wish list',
    items: [{
      id:itemId++,
      text: 'Fender Strat',
      status: true
    },{
      id:itemId++,
      text: 'Fender Telecaster',
      status: false
    },{
      id:itemId++,
      text: 'Gibson Les Paul',
      status: true
    },{
      id:itemId++,
      text: 'PRS Vela',
      status: true
    },{
      id:itemId++,
      text: 'Gibson Explorer',
      status: false
    }]
  }],
  add(name) {
    let lId = listId++;
    let list = {
      id: lId,
      name,
      items: []
    };

    this.lists.push(list);

    return list;
  },
  addItem(data) {
    let list = this.getById(data.listId);

    if (list) {
      let obj = {
        id: itemId++,
        text: data.text,
        status: false
      };

      list.items.push(obj);

      return obj;
    }

    return null;
  },
  getById(listId) {
    let index = this.lists.findIndex(f => f.id === parseInt(listId,10));

    return index > -1 ? this.lists[index] : null;
  },
  remove(listId) {
    let index = this.lists.findIndex(f => f.id === parseInt(listId,10));

    if (index > -1) {
      this.lists.splice(index, 1);
    }
  }
};