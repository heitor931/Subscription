import Router from "express";


const userRouter = Router();

userRouter.get("/", (req, res) => {
  res.send({title: "Get all users"});
});

userRouter.post("/", (req, res) => {
  res.send({title: "Create a new user"});
});

userRouter.get("/:id", (req, res) => {
  const { id } = req.params;
  res.send({title: `Get user with ID: ${id}`});
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