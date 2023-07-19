import express from "express";
import {
  deleteUser,
  getAllUser,
  getFriends,
  getPendingFriends,
  getUser,
  signIn,
  signUp,
  updateUser,
} from "../controller/user";

const userRouter = express.Router();

userRouter.get("/getallusers", getAllUser);
userRouter.get("/getuser/:userid", getUser);
userRouter.post("/signup", signUp);
userRouter.post("/signin", signIn);
userRouter.patch("/updateuser/:userid", updateUser);
userRouter.delete("/deleteuser/:userid", deleteUser);
userRouter.get("/getfriends/:userid", getFriends);
userRouter.get("/getpendingfriends/:userid", getPendingFriends);

export default userRouter;
