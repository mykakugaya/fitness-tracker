const db = require("../models");
const mongoose = require("mongoose");

// API Routes
module.exports = function(app) {
    // Add an exercise
    app.post("/submit", ({body}, res) => {
        db.Exercise.create(body)
        .then(({_id}) => db.Workout.findOneAndUpdate({}, { $push: { exercises: _id } }, { new: true }))
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
    });
    
    // Get all exercises
    app.get("/api/exercises", (req, res) => {
        db.Exercise.find({})
        .then(dbExercise => {
            res.json(dbExercise);
        })
        .catch(err => {
            res.json(err);
        });
    });
    
    // Get all workouts
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
    });
    
    // Stats Dashboard populates workout exercises
    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({})
        .populate("exercises")
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
    });
    
    // Add a workout
    app.post("/api/workouts", (req, res) => {
        db.Workout.create({})
            .then(dbWorkout => {
            res.json(dbWorkout);
            })
            .catch(err => {
            res.json(err);
            });
    });
    
    // Update a workout
    app.put("/api/workouts/:id", (req, res) => {
        db.Workout.updateOne({"_id": mongoose.Types.ObjectId(req.params.id)},
        {$set: {exercises: req.body}})
            .then(dbWorkout => {
            res.json(dbWorkout);
            })
            .catch(err => {
            res.json(err);
            });
    });
}