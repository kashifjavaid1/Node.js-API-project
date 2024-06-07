const mongoose = require('mongoose');
const DB = process.env.DATA_URL;

mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Connected to MongoDB successfully");
}).catch((err) => {
  console.error("Error connecting to MongoDB: ", err);
});


