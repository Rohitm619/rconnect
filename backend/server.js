import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user";
import postRouter from "./routes/post";

const app = express();
app.use(express.json());
app.use(userRouter);
app.use(postRouter);

mongoose
  .connect(
    "mongodb+srv://rohitmforcontact:peX5huR5QfiZNlXr@rconnect.unodncx.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => app.listen(3000))
  .then(() => console.log("Connected!"))
  .catch((err) => console.log(err));
