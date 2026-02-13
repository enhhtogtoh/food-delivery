import { configDotenv } from "dotenv";
import cors from "cors";
import express, { Application } from "express";
import connectToMongoDb from "./mongodb";
import { foodCategoryRouter, foodOrderRouter, userRouter } from "./routers";


configDotenv();

const app: Application = express();
app.use(cors());
app.use(express.json());
const port = 10000;

app.use("/auth", userRouter);
app.use("/food", foodCategoryRouter);
app.use("/food-order", foodOrderRouter);
connectToMongoDb();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
