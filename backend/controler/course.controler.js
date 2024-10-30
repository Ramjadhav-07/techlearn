import { response } from "express";
import Course from "../model/course.model.js";
export const getCourse=async(req,res)=>{
    try {
        const course= await course.find()
        response.status(200).json(course)
    } catch (error) {
        console.log("error ",error);
        res.status(500).json(error);
    }
}
    