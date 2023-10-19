const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const adminData = require('./admin');


router.get('/', (req, res, next) => {
  const products = adminData.products;
  // res.sendFile(path.join(rootDir, 'views', 'shop.html')); normal one
  res.render('shop', 
  {prods : products, 
    docTitle:'Shop', 
    path:"/",
    pageTitle:"Shop",
    activeShop: true,
    productCSS:true });
});

module.exports = router;
