const express = require('express');
const router = express.Router();
const Workout = require('../models/Workout');
const auth = require('../auth/auth');

/*
    * @route POST /api/workouts
    * @access user
    * desc create workout
*/
router.post('/api/workouts', auth, async(req,res) => {
    const {name, duration, exercises} = req.body;
    const workout = new Workout({
        name,
        duration,
        exercises,
        user: req.user._id
    });
    await workout.save();
    res.json(workout);
});

/*
    * @route GET /api/workouts
    * @access user
    * desc get workouts
*/

router.get('/api/workouts', auth, async(req,res)=>{
    const workouts = await Workout.find({user: req.user._id});
    res.json(workouts);
})

/*
    * @route GET /api/workouts/:id
    * @access user
    * desc get single workout
*/

router.get('/api/workouts/:id', auth, async(req,res)=>{
    const workouts = await Workout.findOne({user: req.user._id, _id:req.params.id});
    res.json(workouts);
})


module.exports = router;