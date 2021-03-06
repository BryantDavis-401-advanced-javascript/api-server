'use strict';

const express = require('express');
require('dotenv').config();
const app = express();
const cors = require('cors');
const timestamp = require('../middleware/timestamp.js')
const logger = require('../middleware/logger.js');
const notFound = require('../middleware/404.js');
const serverError = require('../middleware/500.js');

app.use(cors());
app.use(express.json());
app.use(timestamp);
app.use(logger);

// const categoriesRouter = require('./routes/categories.js');
// const productsRouter = require('./routes/products.js');
const modelRouter = require('./routes/model.js');


// app.use('/categories', categoriesRouter)
// app.use('/products', productsRouter)
app.use('/api/v1', modelRouter)


app.use('*', notFound);
app.use(serverError);


module.exports = {
    server: app,
    start: function(port){
        const PORT = port || process.env.PORT || 3000
        app.listen(PORT, () => console.log('listening on port'))
    }
}