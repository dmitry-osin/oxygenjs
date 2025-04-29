process.env['NODE_CONFIG_DIR'] = __dirname + '/config/'

const express = require('express')
const app = express()

const path = require('path')
const config = require('config')

const port = process.env.PORT || config.get('server.port') || 3000

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})