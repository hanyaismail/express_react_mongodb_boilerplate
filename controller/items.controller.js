const Item = require('../model/Item');
const Helper = require('../Helper/helper');

module.exports.findAllItems = async function(req, res) {
    
    try {
        let item = await Item.find().sort({date: -1})
        return Helper.response(res, code=200, success=true, data=item, message="All items")
    } catch (err) {
        return Helper.response(res, code=400, success=false, data=[], message=err.message)
    }
}

module.exports.addItem = async function(req, res) {
    try {
        console.log(req.body)
        const newItem = new Item({
            name: req.body.name
        })

        let item = await newItem.save()
        return Helper.response(res, code=200, success=true, data=item, message="Item added")
    } catch (err) {
        return Helper.response(res, code=400, success=false, data=[], message=err.message)
    }
}

module.exports.getItem = async function(req, res) {
    try {
        let item = await Item.findById(req.params.id)
        data = [item]
        return Helper.response(res, code=200, success=true, data=data, message="Get item")
    } catch (err) {
        return Helper.response(res, code=400, success=false, data=[], message=err.message)
    }
}

module.exports.deleteItem = async function(req, res) {
    try {
        let item = await Item.findById(req.params.id)
        await item.remove()
        return Helper.response(res, code=200, success=true, data=[], message="Item deleted")
    } catch (err) {
        return Helper.response(res, code=400, success=false, data=[], message=err.message)
    }
}