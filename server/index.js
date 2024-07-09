require('dotenv').config();
const express = require("express");
const cors = require("cors");
const router = require("./routes/git.routes");
const dbConnect = require("./db/dbConfig");

dbConnect();
const app = express();

app.use(cors());
app.use(express.json());

app.use('/', router)

const PORT = 3000
app.listen(PORT, () => {
    console.log('connected at', PORT);
})