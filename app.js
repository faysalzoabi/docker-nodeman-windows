const express = require('express')
const app = express()


app.get('/', (req, res) => {
    res.send('finally we learned this docker shit')
})

app.listen(3000, () => {
    console.log('My Rest API is working on 3000');
})