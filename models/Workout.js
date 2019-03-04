const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    name: {
        type: String,
        maxlength: 50,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref:'users'
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    duration: {
        type: Number
    },
    exercises:[
        {
            name: String,
            sets:[
               {
                weight: Number,
                reps: Number
                }
            ]
        }
    ]
});

module.exports = mongoose.model('workouts', WorkoutSchema);

