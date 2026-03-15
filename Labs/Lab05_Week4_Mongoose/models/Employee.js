const mongoose = require('mongoose');

const emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

const EmployeeSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, "Firstname cannot be empty"], //mandatory field
    trim: true,    // removes whitespaces from before and after of the firstname,
    minLength: [2, "Firstname must be at least 2 characters"]
  },
  lastname: {
    type: String,
    alias: 'surname', //nickname for lastname ; only for use in the app; not in the database
    required: [true, "Lastname cannot be empty" ],  //associated error message if the validation is violated
    trim: true
  },
  email: {
    type: String,
    required: [true, "Email cannot be empty"],
    trim: true,
    lowercase: true,
    minLength: [5, "Email must be at least 5 characters"],
    maxLength: [50, "Email cannot be more than 50 characters"],
    match: [emailRegex, "Email cannot be incorrect format. Please correct it."],
    unique: [true, "Employee with same email already exists." ] //not actually a validator but useful for indexing
    // validate: function(value){
    //   var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    //   return emailRegex.test(value);
    // }
  },
  gender: {
    type: String,
    required: true,
    enum: {
      values: ['male', 'female', 'non-binary', 'prefer not to say'],
      message: "Gender must be one of : 'male', 'female', 'non-binary', 'prefer not to say' "
    },
    lowercase: true
  },
  city:{
    type: String,
    required: true,
    trim: true
  },
  designation: {
    type: String,
    required: [ true, "Designation cannot be empty"],
    trim: true
  },
  salary: {
    type: Number,
    required: true,
    default: 0.0,
    min: [100, "Salary cannot be less than 100$"],
    validate: function(value){
      if(value < 0){
        throw new Error("Negative salary not allowed")
      } //if
    }//validate
  },
  createdOn: { 
    type: Date,
    default: Date.now
  },
  updatedOn: { 
    type: Date,
    default: Date.now
  },
});

//Declare Virtual Fields
EmployeeSchema.virtual('fullname')
  .get(function(){
    return `${this.firstname} ${this.lastname}`
  })
  .set(function(value){
    //optionally - split strings to assign to firstname and lastname
    console.log('fullname set - ', value);
  })

//Custom Schema Methods
//1. Instance Method Declaration
EmployeeSchema.methods.getFullName = function(){
  return `${this.firstname} ${this.lastname}`
}

EmployeeSchema.methods.getFormattedSalary = function(){
  return `CAD ${this.salary}`
}

//2. Static method declararion
EmployeeSchema.static("getEmployeeByFirstName", function(value){
  return this.find({firstname : new RegExp(value, 'i')})
})

//Writing Query Helpers
EmployeeSchema.query.byFirstName = function(fname){
  return this.where({firstname : new RegExp(fname, 'i')})
}

//Pre middleware
EmployeeSchema.pre('save', function(){
  console.log("PRE - Save")

  let now = Date.now()
  this.updatedOn = now

  // Set a value for createdOn only if it is null
  if (!this.createdOn) {
    this.createdOn = now
  }

  console.log('PRE - SAVE - doc', this);
});

EmployeeSchema.pre('findOneAndUpdate', function(){
  console.log("PRE - findOneAndUpdate")

  let now = Date.now()
  this.updatedOn = now

  console.log(`PRE - findOneAndUpdate - doc updated on : ${this.updatedOn}`)
});

//Post middleware
EmployeeSchema.post('init', (doc) => {
  console.log('POST - init - %s has been initialized from the db', doc._id);
});

EmployeeSchema.post('validate', (doc) => {
  console.log('POST - validate - %s has been validated (but not saved yet)', doc._id);
});

EmployeeSchema.post('save', (doc) => {
  console.log('POST - save - %s has been saved', doc._id);
});

const Employee = mongoose.model("Employee", EmployeeSchema);
module.exports = Employee;