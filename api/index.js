const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const routes = require('./routes/routes');


dotenv.config();
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));


//middleware
app.use(express.json());
app.use('/api/', routes);


app.listen(8800, () => {
  console.log(`Backend Server Running`);
});
