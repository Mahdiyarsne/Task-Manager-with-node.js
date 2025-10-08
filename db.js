const mongoose = require('mongoose');

async function connectDb() {
  try {
    await mongoose
      .connect
      //data base address
      ();
    console.log('Database connnected successfully');
  } catch (error) {
    console.log('Failed ro connect database', error);
  }
}

module.exports = connectDb;
