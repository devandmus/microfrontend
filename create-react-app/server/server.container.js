const express = require('express')
const app = express()
const port = 3000

app.use(express.static('container'));

app.listen(port, () => {
  console.log(`Server run Container`)
})
