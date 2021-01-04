const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    type: {
        type: String,
        trim: true,
        required: "Type is Required"
    },
    name: {
        type: String,
        trim: true,
        required: "Exercise Name is required"
    },
    weight: {
        type: Number
    },
    sets: {
        type: Number
    },
    reps: {
        type: Number
    },
    distance: {
        type: Number
    },
    duration: {
        type: Number
    }
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;