// app.js
// include packages and define server related variables
const express = require('express')
const exphbs = require('express-handlebars')
const generateTrashtalk = require('./generate')
const app = express()
const port = 3000

// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting routes
app.get('/', (req, res) => {
  const option = req.query
  // console.log(option)
  const trashtalk = generateTrashtalk(req.query)
  res.render('index', { trashtalk: trashtalk,option:option })
})



// starts the express server and listening for connections.
app.listen(port, () => {
  console.log(`Express app listening on port ${port}.`)
})