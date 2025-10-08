const express = require('express');
const app = express();
const userRoute = require('./routes/user.route');
const taskRoute = require('./routes/task.route');
const port = 4000;
const connectDb = require('./db');

//connection to database
connectDb();

//middleware
app.use(express.json()); // access to req.body

//users
app.use('/users', userRoute);

//tasks
app.use('/tasks', taskRoute);

app.listen(port, () => {
  console.log('server is running');
});
