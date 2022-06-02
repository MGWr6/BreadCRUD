const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')

// INDEX
breads.get('/', (req, res) => {
  res.render('index', 
    {
      breads: Bread
    }
  )
  // The first argument for res.render() is always the name of the file inside the views folder we want to render.
// The second (optional) argument for res.render() is alwasys an object. We can name it and add as many keys as we want.
})


// SHOW
breads.get('/:arrayIndex', (req, res) => {
  res.send(Bread[req.params.arrayIndex])
})

module.exports = breads