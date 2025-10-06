const mongoose = require('mongoose');

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

module.exports = connectDb;
