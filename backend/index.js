{/*import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import courseRoute from './route/course.route.js';
import userRoute from './route/user.route.js';

import cors from 'cors';

const app = express();
  app.use(cors()) 
 app.use(cors({
    origin: 'http://localhost:5173', // Adjust this to your front-end URL
    credentials: true // If you need to include credentials
}));

app.use(express.json());

dotenv.config();
const port = process.env.PORT || 4001; // Use uppercase for environment variable
const MongoDBURI = process.env.MongoDBURI;

app.get('/', (req, res) => {
  res.send('mini project1');
});

// Connect to MongoDB
mongoose.connect(MongoDBURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("Connected to MongoDB");
})
.catch((error) => {
  console.log("Error connecting to MongoDB:", error);
});

// Defining routes
app.use("/course", courseRoute);
app.use("/user", userRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
*/}


import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import courseRoute from './route/course.route.js';
import userRoute from './route/user.route.js';

dotenv.config();
const app = express();

// Enable CORS for specific origin
app.use(cors({
  origin: 'http://localhost:5173', // Your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allowed methods
  credentials: true, // Allow credentials if needed
}));


app.use(express.json());

const port = process.env.PORT || 4001;
const MongoDBURI = process.env.MongoDBURI;

mongoose.connect(MongoDBURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch(error => console.error("Error connecting to MongoDB:", error));

// Define routes
app.use("/course", courseRoute);
app.use("/user", userRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
