const express = require('express');
const router = express.Router();
const Template = require('../models/Template');
const auth = require('../auth/auth');


/*
    * @route POST /api/templates
    * @access current user
    * desc create workout templates
*/
router.post('/api/templates', auth, async(req,res)=>{
    const {name, exercises} = req.body;
    // find this workout by name, if i find one, return 400
    // do not let dublicate workout
    const match = await Template.findOne({user: req.user._id, name: req.body.name.toLowerCase()});
    if(match) return res.status(400).send('Workout exsists')
    const template = new Template({
        name,
        exercises,
        user: req.user._id
    });
    try{
        await template.save();
        res.send('ok')
    } catch (e){
        res.json(e);
    }
});

/*
    * @route PUT /api/template
    * @access current user
    * desc update workout template
*/
router.put('/api/templates', auth, async(req,res)=>{
    // find template
    const template = await Template.findOne({user:req.user._id, name:req.body.name});
    // update fields
    template.exercises = req.body.exercises;
    // save and send template
    await template.save()
    // const template = await Tempalte.findOneAndUpdate({user:req.user._id, name:req.body.name}, {$set:{exercises: req.body.exercises}});
    res.json(template);
})

/*
    * @route GET /api/template
    * @access current user
    * desc get user templates
*/
router.get('/api/templates', auth, async(req,res)=>{
    const templates = await Template.find({user: req.user._id});
    res.json(templates);
})

/*
    * @route GET /api/template/:name
    * @access current user
    * desc get single template
*/
router.get('/api/templates/:name', auth, async(req,res)=>{
    const templates = await Template.find({user: req.user._id, name: req.params.name});
    if(templates.length === 0) return res.status(404).send('template not found');
    res.json(templates);
})

/*
    * @route DELETE /api/template/:name
    * @access current user
    * desc delete single template
*/
router.delete('/api/templates/:name', auth, async(req,res)=>{
    await Template.deleteMany({user:req.user._id, name: req.params.name});
    res.send('template deleted');
})

module.exports = router;