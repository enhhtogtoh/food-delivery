import { configDotenv } from "dotenv";
import cors from "cors";
import express, { Application } from "express";
import connectToMongoDb from "./mongodb";
import { userRouter } from "./routers";
import { foodCategoryRouter } from "./routers/food.router";

configDotenv();

const app: Application = express();
app.use(cors());
app.use(express.json());
const port = 10000;

app.use("/auth", userRouter);
app.use("/food", foodCategoryRouter);
connectToMongoDb();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
