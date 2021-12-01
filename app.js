const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
// const { use } = require('./routes/auth');

const app = express();

require('dotenv').config(); // to start our .env package


// db connection
mongoose.connect(process.env.MONGODB_URL)
.then(() => console.log("Connected to DB...✅"))
.catch(() => console.log("Couldn't conect to DB...❌"))

// middleware connection
app.use(express.json());
app.use(cors());

// routes
app.use("/api/v1/auth", require("./routes/auth"));
app.use("/api/v1/users", require("./routes/user"));
// app.use("/api/v1/cars", require("./routes/car"));
app.use("/api/v1/contacts", require("./routes/contact"));


// port setup & listen to clients
const port = process.env.PORT || 5000;
app.listen(port, () => console.log("Server running...✔"));