const db = require("../models");
const mongoose = require("mongoose");

// API Routes
module.exports = function(app) {
    // Add an exercise
    app.put("/api/workouts/:id", ({body,params}, res) => {
        db.Workout.findByIdAndUpdate(params.id, {$push: { exercises:body}})
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
            console.log(dbWorkout)
            res.json(dbWorkout);
        })
        .catch(err => {
            console.log(err)
            res.json(err);
        });
    });
    
    // Stats Dashboard - populate workout exercises
    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
    });
    
}