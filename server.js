// DEPENDENCIES
// Set up Basic Express Server
const express = require('express')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()
// console.log(PORT) // running nodemon server.js will show the specified PORT in .env if all is set up correctly


// ROUTES
app.get('/', (req, res) => {
  res.send('Welcome to an Awesome App about Breads!')
})

// BREADS
const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)


// WILDCARD
app.get('*', (req, res) => {
  res.send('error404 page not found')
})


// LISTEN
// the app starts a server and listens on the specified port for connections. It then responds with 'welcome to an awesome app...' for requests to the root url (/) or route.
app.listen(PORT, () => {
  console.log('NOM NOM NOMMING at PORT', PORT)
})