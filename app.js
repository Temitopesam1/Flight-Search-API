const express = require('express');
const dotenv = require("dotenv")
const flightRoutes = require('./routes/flightRoute');

// load config
dotenv.config({ path: "./config.env" })

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Mount flightRoutes
app.use('/api', flightRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
