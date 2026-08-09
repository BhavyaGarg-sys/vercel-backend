require('dotenv').config();

const connectToMongo = require('./db');
const express = require('express');
const cors = require('cors');

connectToMongo();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('iNotebook backend is running!');
});

app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

if (require.main === module) {
    const port = 5000;
    app.listen(port, () => {
        console.log(`iNotebook backend listening on port ${port}`);
    });
}

module.exports = app;