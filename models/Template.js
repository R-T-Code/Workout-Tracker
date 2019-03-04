const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TemplateSchema = new Schema({
   user:{
       type: Schema.Types.ObjectId,
       ref: 'users'
   },
   name:{
       type: String,
       isRequired: true,

   },
   exercises: {
       type: Array
   }
});

module.exports = mongoose.model('templates', TemplateSchema);