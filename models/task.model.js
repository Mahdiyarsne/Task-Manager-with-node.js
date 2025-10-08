const mongoose = require('mongoose');
const { Schema } = mongoose;

const taskSchema = new Schema({
  title: String,
  description: String,
  status: { type: String, default: 'pending' }, // for success or failed
  userId: mongoose.Types.ObjectId,
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
