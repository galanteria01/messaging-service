const express = require('express');
const mongoose = require('mongoose');
const { MONGO_URI } = require('./utils/constants');
const app = express();
const userRoutes = require('./routes/user')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).
  catch(error => console.log(error));


mongoose.connection.on('error', err => {
  console.log(err)
})

mongoose.connection.once('open', () => {
  console.log("Database has been connected successfully")

})

app.use('/user', userRoutes);

app.get('/', (req, res) => {
  res.send("Works")
})

app.listen(8000, () => {
  console.log("App is running on 8000");
})