require('dotenv').config();
const express = require('express');
const cors = require('cors');
conztaf

const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.json());
app.use(cors());

const start = () => {
    try {
        app.listen(PORT, () => {console.log(`server is started on port ${PORT}`)})
    } catch(e) {
        console.log(e)
    }
}

start();
