import User from "../model/user.model.js";
import bcrypt from 'bcryptjs'; // Correct import
{/*
export const signup = async (req, res) => {
    try {
        const { fullName, email, password } = req.body;

        // Check if all fields are provided
        if (!fullName || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashPassword = await bcrypt.hash(password, 10);
        const createdUser = new User({
            fullName,
            email,
            password: hashPassword,
        });

        await createdUser.save();
        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        console.log("Error:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};*/}
export const signup = async (req, res) => {
    try {
        const { fullname, email, password } = req.body; // Changed to 'fullname'

        // Check if all fields are provided
        if (!fullname || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashPassword = await bcrypt.hash(password, 10);
        const createdUser = new User({
            fullname, // Keep it as 'fullname'
            email,
            password: hashPassword,
        });

        await createdUser.save();
        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        console.log("Error:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};


export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if all fields are provided
        if (!email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid username or password" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid username or password" });
        }

        res.status(200).json({
            message: "Login successful",
            user: {
                _id: user._id,
                fullName: user.fullName,
                email: user.email
            }
        });
    } catch (error) {
        console.log("Error:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};
