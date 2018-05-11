var mongoose=require('mongoose');
var Schema = mongoose.Schema;
var schema= new Schema({
    "School_Id" : {type:String},
    "Teacher_Id":{type:String},
    "First Name": {type:String},
    "Last Name": {type:String},
    "Date of birth": {type:String},
    "Age": {type:String},
    "Qualification": {type:String},
    "Expreience": {type:String},
    "Package": {type:String},
     "Address":{type:String},
    "Phone Number":  {type:String},

})
module.exports=mongoose.model('teacher_details',schema);
