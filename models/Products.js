const knex = require('../config')

const create = (body) => {
    return knex
    .insert(body)
    .into('products') 
    .returning(["product_id","name","description","price","sku"])
}
const findAll = () => {
    return knex
    .select(["product_id","name","description","price","sku"])
    .from('products')
}
const findOne = (productId) => {
    return knex
    .select(["product_id","name","description","price","sku"])
    .from('products')
    .where({product_id: productId})
}
const updateProduct = (productId, bodyToUpdate) => {
    return knex
    .update(bodyToUpdate)
    .from('products')
    .where({product_id: productId})
    .returning(["product_id","name","description","price","sku"])
}
const deleteProduct = (productId) => {
    return knex
    .del()
    .from('products')
    .where({product_id: productId})
}
const softDeleteProduct = (productId) => {
    return knex
    .update({active: false})
    .from('products')
    .where({product_id: productId})
}

module.exports = {
    create,
    findAll,
    findOne,
    updateProduct,
    deleteProduct,
    softDeleteProduct
}
