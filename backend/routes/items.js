const express = require('express');
const router = express.Router();

let Item = require('../models/item');

router.get('', (req, res) => Item.find()
    .then(items => res.json({data:items}))
    .catch(err => res.json({message: err.message})));

router.post('/create', (req, res) => Item.create(req.body)
    .then(item => res.json({data:item}))
    .catch(err => res.json({message: err.message})));

router.put('/update', (req, res) => {
    Item.findById(req.query.id)
        .then(item => {
          item.comments.push(req.body.comment);
          item.save()
              .then(item => res.json({data:item}))
              .catch(err => res.json({message: err.message}))
        })
        .catch(err => res.json({message: err.message}))
});

router.delete('/delete', (req, res) => Item.findByIdAndRemove(req.query.id)
    .then(res.json({data: "Item with id: " + req.query.id + "removed successfully"}))
    .catch(err => res.json({message: err.message})));

module.exports = router;