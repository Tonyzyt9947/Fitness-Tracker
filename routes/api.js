const router = require('express').Router();
const Workout = require('../models/workout');

router.post("/workouts", async (req, res) => {
    try {
        const data = await Workout.create(req.body);
        res.status(200).json(data);
    } catch (err){
        res.status(400).json(err);
    }
})

router.put("/workouts/:id", async (req, res) => {
    try {
        const data = await Workout.findByIdAndUpdate({_id:req.params.id},{$push:{exercise:req.body}});
        res.status(200).json(data);
    } catch (err){
        res.status(400).json(err);
    }
})

router.get("/workouts", async (req, res) => {
    try {
        const data = await Workout.find({}).sort({day: -1});
        res.status(200).json(data);
    } catch (err){
        res.status(400).json(err);
    }
})

router.get("/workouts/range", async (req, res) => {
    try {
        const data = await Workout.find({}).sort({day: -1}).limit(7);
        res.status(200).json(data);
    } catch (err){
        res.status(400).json(err);
    }
})

module.exports = router;