require('dotenv').config()

const URL = process.env.URL;
const PORT = process.env.PORT;
const SECRET = process.env.SECRET;

module.exports = {
        URL,
        PORT,
        SECRET
}