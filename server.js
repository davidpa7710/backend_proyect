require('dotenv').config();

const express = require('express')
const app = express()
const PORT = 5050
const routerAPI = require('./Routes/routesAPI')


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/v1', routerAPI);

app.listen(PORT, () => {
    console.log(`Server On Port: ${PORT}`);
})

