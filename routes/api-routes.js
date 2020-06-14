const db = require("../models");
const mongoose = require("mongoose");

// API Routes
module.exports = function(app) {
    // Add an exercise
    app.put("/api/workouts/:id", ({body}, res) => {
        db.Exercise.create(body)
        .then(({_id}) => db.Workout.findOneAndUpdate({_id: mongoose.Types.ObjectId(req.params.id)}, {$push: { exercises: _id }}, { new: true }))
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
    
    // Stats Dashboard - populate workout exercises
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
    
}