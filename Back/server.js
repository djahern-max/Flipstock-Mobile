const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

const app = express();

connectDB();
console.log('database connected');

// app.get('/', (req, res) => res.send('API Running'));

app.use(express.json({ extended: false }));

app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/stockData', require('./routes/api/stockData'));
app.use('/api/users', require('./routes/api/users'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
