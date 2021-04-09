const express = require('express')
const app = express()
const path = require('path')

// json parse
app.use(express.json())
// serve static files
app.use(express.static(path.join(__dirname, './public')))

// 404 handler
app.use((req, res, next) => {
    const error = Error(`Page not found(${req.url})`)
    error.status = 404
    next(error)
})

// 500 handler
app.use((err, req, res, next) => {
    res.status(err.status || 500).send(`
    <html>
      <body>
        <h1 style = color:crimson>${err}</h1>
        <p>${err.stack}</p>
      </body>
    </html>`)
})

// listen on port
const port = process.env.PORT || 3035

const init = async () => {
    try {
        app.listen(port, () => console.log(`listening on port ${port}`))
    } catch (err) {
        console.log(err)
    }
}

init()
