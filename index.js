const express = require('express')
const app = express()
const articleData = require('./biochem.json')
let cors = require('cors')

const port = process.env.PORT || 3000

app.use(cors())

app.get('/', (req, res) => {
  res.send("Biochemstry labaratory")
})

app.get('/articles', (req, res) => {
  res.send(articleData)
})

app.listen(port, () => {
  console.log(`App is listening to port ${port}`);
})