const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  date: {
    type: Date,
    default: ()=>new Date()
  },
  exercises: {
    type: Array,
    default:[]
  }
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
