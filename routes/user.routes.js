import Router from "express";
import { getAllUsers, getUser } from "../controllers/user.controller.js";
import { authorize } from "../middleware/auth.middleware.js";


const userRouter = Router();


// Get all users
userRouter.get("/", getAllUsers);

// Get a single user by ID
userRouter.get("/:id", authorize, getUser);

userRouter.post("/", (req, res) => {
  res.send({title: "Create a new user"});
});


userRouter.put("/:id", (req, res) => {
  const { id } = req.params;
  res.send({title: `Update user with ID: ${id}`});
});

userRouter.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.send({title: `Delete user with ID: ${id}`});
});

export default userRouter;