const express = require("express")
const { createProduct, fetchAllProducts, fetchProductById, updateProduct } = require('../controller/Product')
const { fetchUserById, updateUser } = require("../controller/User")


const router = express.Router()


router
        .get('/own',fetchUserById)
        .patch('/:id',updateUser)

exports.router = router