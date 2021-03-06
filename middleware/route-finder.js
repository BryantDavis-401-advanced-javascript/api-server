'use strict';

const Categories = require('../lib/models/categories.collection.js');
const Products = require('../lib/models/products.collection.js');
const Todo = require('../lib/models/todo.collection.js');
const express = require('express');

function getRoute(req, res, next){
    if(req.params.model === 'products'){
        req.params.model = Products;
        next();
    }
    else if(req.params.model === 'categories'){
        req.params.model = Categories;
        next();
    }
    else if(req.params.model === 'todo'){
        req.params.model = Todo;
        next();
    }
    else{
        next('Invalid model');
    }
}

module.exports = { getRoute };