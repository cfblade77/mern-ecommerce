const express = require("express")
const { createProduct, fetchAllProducts, fetchProductById, updateProduct } = require('../controller/Product')
const { fetchUserById, updateUser } = require("../controller/User")
const { createUser ,loginUser, checkUser,checkAuth} = require("../controller/Auth")
const passport = require("passport")


const router = express.Router()


router.post('/signup',createUser)
.post('/login',passport.authenticate('local'),loginUser)
.get('/check',passport.authenticate('jwt'),checkAuth)
    

exports.router = router