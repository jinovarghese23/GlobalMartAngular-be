
// three modules needed// 1)CORS, 2)express, 3)dotenv,
// 4)Nodemon:to automatically detect change and restart
require('dotenv').config()
const express = require('express');
const cors = require('cors')
require('./DB/connection')
const routes = require('./Routes/router')
const userRoutes = require('./Routes/userRouter')
const cartServer = express();
cartServer.use(cors());
cartServer.use(express.json())
cartServer.use(routes)
cartServer.use(userRoutes)
const PORT = 3000;

cartServer.listen(PORT, () => {
    console.log(`Cart server running in port ${PORT}`);
})

cartServer.get('/', (req, res) => {
    res.send(
        `<h3>cartServer runnig successsfully in port:3000</h3>`
    )
})

