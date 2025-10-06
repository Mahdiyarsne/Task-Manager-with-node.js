const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 4000;

//mahdiyarsne98
//mahdiyarsne1998
//mongodb+srv://mahdiyarsne98:<db_password>@cluster0.1xtd9ic.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

app.get('/', (req, res) => {
  res.send('Hello World');
});

async function connectDb() {
  try {
    await mongoose.connect(
      'mongodb+srv://mahdiyarsne98:mahdiyarsne1998@cluster0.1xtd9ic.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    );
    console.log('Database connnected successfully');
  } catch (error) {
    console.log('Failed ro connect database', error);
  }
}

connectDb();

app.listen(port, () => {
  console.log('server is running');
});
