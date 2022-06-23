const knex = require('../config')

const create = (body) => {
    return knex
    .insert(body)
    .into('products') 
    .returning(["product_id","name","description","price","sku"])
}
module.exports = {
    create
}
