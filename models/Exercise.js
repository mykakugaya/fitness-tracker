const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    type: String,
    name: String,
    // if type = Resistance
    weight: Number,
    sets: Number,
    reps: Number,
    // if type = Cardio
    distance: Number,
    duration: Number
});

ExerciseSchema.methods.setCardio = function() {
    
};
ExerciseSchema.methods.setResistance = function() {
    
};

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;