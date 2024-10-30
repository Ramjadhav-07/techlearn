{/*import express from 'express';
import { getCourse } from '../controler/course.controler.js';
const router=express.Router()
router.get("/",getCourse)

export default router;*/}
import express from 'express';
import { getCourse } from '../controler/course.controler.js'; // Ensure this path is correct

const router = express.Router();

router.get('/', getCourse); // Ensure this function exists and is imported correctly

export default router;
