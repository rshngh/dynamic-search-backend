import "dotenv/config";
import express, { urlencoded } from "express";
import cors from "cors";
import connectDB from "./server.js";
import cityRouter from "./routes/city.routes.js";

const app = express();
const PORT = process.env.PORT;

app.use(cors());

try {
  app.listen(PORT, () => {
    console.log(`Successfully connected to the server at port ${PORT}.`);
    connectDB(process.env.MONGODB_URI);
  });
} catch (error) {
  console.log("Error connecting to the server!");
}

app.get("/", (req, res) => {
  res.send("Server is running.");
});

app.use("/api/cities", cityRouter);
