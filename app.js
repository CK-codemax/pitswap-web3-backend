const express = require("express");
const app = express();
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const cors = require("cors");
const tokenRouter = require("./routes/tokenRoutes");
// const tokenController = require("./controllers/tokenController");

// middlewares
app.use(express.json());
app.use(cors());
// const corsOptions = {
//     origin: 'http://localhost:3000/', // Specify the allowed origin(s)
//     optionsSuccessStatus: 200,
//     //methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'] // Specify the allowed HTTP methods
//   };
  
// app.use(cors(corsOptions));

// app.use(cors({
//     origin: 'http://localhost:3000', // Only allow requests from http://localhost:3000
//     methods: ['GET', 'POST', 'PATCH', 'DELETE'], // Allow GET and POST methods
//     allowedHeaders: ['Content-Type'] // Allow Content-Type header
//   }));
  
app.use("/tokens", tokenRouter);
app.use("/", tokenRouter);
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});


 