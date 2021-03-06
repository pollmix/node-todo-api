const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);
// mongoose.connect("mongodb://localhost:27017/TodoApp", { useNewUrlParser: true });
mongoose.connect("mongodb://todo:todo123@ds159036.mlab.com:59036/todo-api123", { useNewUrlParser: true });

mongoose.connection
  .on('error', console.error.bind(console, 'Connection Error:'))
  .once('open', () => console.log('Connected to DB'))

module.exports = { mongoose };
