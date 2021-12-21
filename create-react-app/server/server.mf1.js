const express = require('express')
const app = express()
const port = 3001

app.use(express.static('mf1'));

app.listen(port, () => {
  console.log(`Server run MF1`)
})
