
var script = "hello";

// eslint-disable-next-line no-undef
// eslint-disable-next-line no-console
console.log(script);

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var morgan = require('morgan');

let app = express();

app.use(morgan('combine'));
app.use(bodyParser.json());
app.use(cors());

app.get('/status', (req, res) => {
    res.send({
        message: 'hello word!'
    })
})

app.listen(process.env.PORT || 8088);