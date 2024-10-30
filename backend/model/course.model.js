import mongoose from 'mongoose';
const courseschema=mongoose.Schema({

    name:String,
    price:Number,
    category:String,
    title:String
})
const Course=mongoose.model("Course",courseschema);
export default Course;