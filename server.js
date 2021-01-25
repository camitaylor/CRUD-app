const express = require('express');
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const app = express();

app.use(bodyParser.urlencoded({extended: true}))
MongoClient.connect('mongodb+srv://cami_taylor:abcd1234@cluster0.oxcea.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useUnifiedTopology: true
  },(err, client) => {
    if (err) return console.error(err)
    console.log('Connected to Database')
    const db = client.db('crud')
})

app.listen(9000, function() {
    console.log('listening on 9000')
})

app.get('/', (req, res) => {
    res.sendFile('/Users/student/Documents/dev/CRUD-app' + '/index.html')
})

app.post('/quotes', (req, res) => {
    console.log(req.body)
})