const { mongoose } = require('./schema');
const config = require('config');

mongoose.connect(config.get('db.host'), { useNewUrlParser: true, useUnifiedTopology: true })
    .then()
    .catch(err => console.log(err));

