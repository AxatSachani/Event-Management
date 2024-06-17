const express = require('express');
const router = require('./routes');
const app = express()
app.use(express.json())

// handle cors
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET,DELETE,POST,PATCH')
    res.setHeader('Access-Control-Allow-Headers', '*')
    res.setHeader('Access-Control-Allow-Credentials', '*')
    next()
})

// attach all routes
app.use('/api', router)


// server health check endpoint
app.get('/api/health', (req, res) => {
    res.status(200).send({ code: 200, success: true, message: 'ok' })
})


// handle unregistered endpoint
app.use('*', (req, res) => {
    res.status(405).send({ code: 405, success: false, message: 'Method Not Found!' })
})

const PORT = process.env.PORT || 8032

// listen server on port
app.listen(PORT, () => {
    console.log('server running on port ', PORT);
})

