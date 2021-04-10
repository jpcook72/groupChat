const express = require('express');
const app = express()
const path = require('path')

// json parse
app.use(express.json())
// serve static files
app.use(express.static(path.join(__dirname, './public')))

interface ResponseError extends Error {
    status?: number;
}

// 404 handler
app.use((req: any, res: any, next: any) => {
    const error: ResponseError = Error(`Page not found(${req.url})`)
    error.status = 404
    next(error)
})

// 500 handler
app.use((err: ResponseError, req: any, res: any, next: any) => {
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

const init = async () : Promise<void> => {
    try {
        app.listen(port, () => console.log(`listening on port ${port}`))
    } catch (err) {
        console.log(err)
    }
}

init()
