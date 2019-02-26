const router = require('express').Router()
const user = require('./user')
const productMaintenance = require('./productMaintenance')
router.use(user)
router.use(productMaintenance)
module.exports = router