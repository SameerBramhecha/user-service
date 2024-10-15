const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const sequelize = require('./config');
require('dotenv').config('../.env');

const app = express();

app.use(bodyParser.json());

app.use('/api/users', userRoutes);

// Sync Database and Start Server
sequelize.sync()
    .then(() => {
        console.log('Database synced');
        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
            console.log(`User Service running on port ${PORT}`);
        });
    })
    .catch(err => {
        console.error('Failed to sync database:', err);
    });
