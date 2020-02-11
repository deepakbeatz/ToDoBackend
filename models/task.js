var mongoose = require("mongoose");

var taskSchema = new mongoose.Schema({
    userName: String,
    taskName : String,
    taskStatus: String
});

module.exports = mongoose.model("task", taskSchema);