import { configDotenv } from "dotenv";
import cors from "cors";
import express, { Application } from "express";
import connectToMongoDb from "./mongodb";
import { userRouter } from "./routers";
// import { UserModel } from "./models/card.model";

configDotenv();

const app: Application = express();
app.use(cors());
app.use(express.json());
const port = 8000;

app.use("./users", userRouter);

app.listen(port, async () => {
  await connectToMongoDb();
  console.log(`Server is running on port ${port}`);
});
