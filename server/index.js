// load variable(s) from .env file
require('dotenv').config()
const app = require('./src/app')

const PORT = process.env.SERVER_PORT

app.listen(PORT, () => {
    console.log(`⚡️ server running on http://localhost:${PORT}`)
})
