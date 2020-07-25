// packages
const express = require('express')
const mongoose = require('mongoose');
const {MONGO_DB_URI} = require('./config/db');

const app = express()
const port = process.env.PORT || 3000;

mongoose.connect(MONGO_DB_URI, { useNewUrlParser: true, useUnifiedTopology: true});

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// Routes
app.use("/api/v1/products", require('./routes/products'));

app.listen(port, () => console.log(`listening at http://localhost:${port}`))


module.exports = app;