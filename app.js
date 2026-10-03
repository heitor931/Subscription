console.log("Server is running on port 3000");
import express from "express";
import { PORT } from "./config/env.js";
import subscriptionRouter from "./routes/subscription.router.js";
import userRouter from "./routes/user.router.js";
import authRouter from "./routes/auth.router.js";

const app = express();

app.use("/api/v1/subscriptions", subscriptionRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/auth", authRouter);


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});