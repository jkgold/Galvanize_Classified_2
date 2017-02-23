
'use strict';
// const boom = require('boom');
const express = require('express');
const knex = require('../src/knex');
const router = express.Router();


// YOUR CODE HERE
router.get('/', (req, res, next) => {
  knex('classifieds')
  .select('id', 'title','description', 'price', 'item_image')

  .then(function(results) {
    // console.log(results);
    res.json(results);

  })
  .catch(function(err) {
    res.json(err);
  });
});

router.get('/:id', (req, res, next) => {
  const id = Number.parseInt(req.params.id);
  // console.log(req.params.id);
  if (Number.isNaN(id)) {
    return next();
    }
    knex('classifieds')
    .where('id', id)
    .select('id', 'title','description', 'price', 'item_image')
    .then((row) => {
      res.json(row[0]);
    })
    .catch((err) => {
      next(err);
    });
});

//post is not working

router.post('/', (req,res,next) => {
  var title = req.body.title;
  // console.log(title);
  var description = req.body.description;
  var price = req.body.price;
  var item_image = req.body.item_image;
  knex('classifieds')
  .insert({
    title: title,
    description: description,
    price: price,
    item_image: item_image

  }, ["id", "title", "description", "price", "item_image"])
  // .expect('Content-Type', /json/)

  .then ((row) => {
    // console.log(row);
    res.send(row[0]);
  });
});

router.patch('/:id', (req, res, next) => {
  var title = req.body.title;
  console.log("PATCH ROUTE title: ", title);
  var description = req.body.description;
  var price = req.body.price;
  var item_image = req.body.item_image;
  knex('classifieds')
    .update({
      title: title,
      description: description,
      price: price,
      item_image: item_image

    }, ["id","title", "description", "price", "item_image"])
    // .expect('Content-Type', /json/)

    .then ((row) => {
      console.log("PATCH ROUTE row: ", row);
      res.send(row[0]);
    })
    .catch((err) => {
      next(err);
      });
    });

    router.delete('/:id', function(req, res, next)  {
  let id = parseInt(req.params.id);
  let classified;

  knex('classifieds')
    .where('id', id)
    .first()
    .then(function(data){
      classified = data;
      return knex('classifieds')
        .del()
        .where('id', id);
    })
    .then(function() {
      delete classified.created_at;
      delete classified.updated_at;
      res.send(classified);
    })
      .catch(function(err) {
        next(err);
      });
    });






module.exports = router;
