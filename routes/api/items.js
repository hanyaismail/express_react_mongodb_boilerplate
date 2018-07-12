const express = require('express');
const router = express.Router();
const { verifyToken } = require('../../Helper/helper');

// items controller
const itemsController = require('../../controller/items.controller');

// @route GET api/items
// @desc Get All Items 
// @access Public
router.get('/', itemsController.findAllItems)

// @route GET api/items
// @desc Get an item 
// @access Public
router.get('/:id', itemsController.getItem)

// @route POST api/items
// @desc Create A Post 
// @access Public
router.post('/', itemsController.addItem)

// @route DELETE api/items/:id
// @desc Delete A Post 
// @access Public
router.delete('/:id', itemsController.deleteItem)



module.exports = router;