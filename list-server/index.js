const express = require('express')
const app = express()
const port = 3000;
const cors = require('cors');

const lists = require('./lists');
const e = require('express');

app.use(cors());
app.use(express.json());

app.get('/lists', (req, res) => {
    res.json(lists.lists);
});

app.post('/lists', (req, res) => {
    console.log(req.body.name);
    let list = lists.add(req.body.name);

    res.json(list);
});

app.delete('/lists/:listId', (req, res) => {
    lists.remove(parseInt(req.params.listId, 10));

    res.json({});
});

app.get('/lists/:listId', (req, res) => {
    let list = lists.lists.find(l => l.id === parseInt(req.params.listId));

    if (list) {
        res.json(list);
    } else {
        res.status(404).json({
            error: 'not found'
        });
    }
});

app.get('/items/:itemId', (req, res) => {
    let {item} = findItemById(req.params.itemId);

    if (item) {
        res.json(item);
    } else {
        res.status(404).json({
            error: 'not found'
        });
    }
});

app.post('/items', (req, res) => {
    let item = lists.addItem({
        listId: req.body.listId,
        text: req.body.text
    });

    if (item) {
        res.json(item);
    } else {
        res.status(404).json({
            error: 'not found'
        });
    }
});

app.put('/items/:itemId', (req, res) => {
    let {item} = findItemById(req.params.itemId);

    if (item) {
        item.status = req.body.status;
        item.text = req.body.text;
        res.json(item);
    } else {
        res.status(404).json({
            error: 'not found'
        });
    }
});

app.delete('/items/:itemId', (req, res) => {
    let {list, item} = findItemById(req.params.itemId);

    if (item) {
        let index = list.items.indexOf(item);

        list.items.splice(index, 1);

        res.json({});
    } else {
        res.status(404).json({
            error: 'not found'
        });
    }
});

function findItemById(id) {
    id = parseInt(id);
    for (let ii = 0; ii < lists.lists.length; ii++) {
        let list = lists.lists[ii];

        for (let jj = 0; jj < list.items.length; jj++) {
            let item = list.items[jj];
            if (item.id === id) {
                return {list,item};
            }
        }
    }

    return null;
}

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})  