const express = require('express');
const sequelize = require('./Utils/database');
const Customer = require('./models/customer');
const Order = require('./models/order');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello There.');
})

Customer.hasMany(Order);


sequelize.sync().then((result) => {
    console.log(result);
}).catch((err) => console.log(err))

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`on port ${PORT}`));