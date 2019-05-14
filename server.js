var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')

var tasks = require('./routes/tasks')
var cors = require('cors')

var port = process.env.$PORT || process.env.PORT || 3000;

var app = express()
app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/api', tasks);
// app.use('/')
// app.get('/', (req, res) => {
//   res.sendFile(`${__dirname}/client`)
// })

app.listen(port, function() {
    console.log('Server started on port ' + port)
  })
  