process.env['NODE_CONFIG_DIR'] = __dirname + '/config/';

const express = require('express');
const app = express();

const path = require('path');
const config = require('config');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('views engine', 'pug');
app.set('views', path.join(__dirname, 'templates'));

const port = process.env.PORT || config.get('server.port') || 3000;

app.listen(port, () => {
    console.log(`Server is running at ${port}`)
});