import Router from "express";

const authRouter = Router();

authRouter.post("/sign-up", (req, res) => {
  res.send({ title: "User login" });
});

authRouter.post("/sign-in", (req, res) => {
  res.send({ title: "User login" });
});

authRouter.post("/sign-out", (req, res) => {
  res.send({ title: "User logout" });
});

export default authRouter;

