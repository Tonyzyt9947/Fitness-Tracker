const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
            },
            name: {
                type:String,
                trim:true,
            },
            duration: {
                type:Number,
                default: 0,
            },
            weight: {
                type:Number,
                default: 0,
            },
            reps: {
                type:Number,
                default: 0,
            },
            sets: {
                type:Number,
                default: 0,
            },
            distance: {
                type:Number,
                default: 0,
            }
        }
    ],
    totalDuration: {
        type:Number
    }
});

WorkoutSchema.methods.addDurations = function(){
    let total = 0;
    this.exercises.forEach(exercise => {
        total += exercise.duration;
    })
    this.total
}

const Workout = mongoose.model("workout", WorkoutSchema);
module.exports = Workout;