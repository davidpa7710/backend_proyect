const knex = require('../config')

const create = (bodyHome) => {
    return knex
    .insert(bodyHome) // Datos a insertar
    .into('homes') // ¿De qué tabla?
    .returning(['house_id', 'title', 'description', 'guest', 'address', 'rental_price', 'fk_user', 'active', 'created_at'])
}