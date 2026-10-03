import Router from "express";

const subscriptionRouter = Router();

subscriptionRouter.get("/", (req, res) => {
  res.send({ title: "Get all subscriptions" });
});

subscriptionRouter.post("/", (req, res) => {
  res.send({ title: "Create a new subscription" });
});

subscriptionRouter.get("/:id", (req, res) => {
  const { id } = req.params;
  res.send({ title: `Get subscription details for user ID: ${id}` });
});

subscriptionRouter.put("/:id", (req, res) => {
  const { id } = req.params;
  res.send({ title: `Update subscription details for user ID: ${id}` });
});

subscriptionRouter.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.send({ title: `Delete subscription for user ID: ${id}` });
});


subscriptionRouter.put("/:id/cancel", (req, res) => {
  const { id } = req.params;
  res.send({ title: `Cancel subscription for user ID: ${id}` });
});

subscriptionRouter.get("/upcoming-renewals",(req, res) => {
    res.send({ title: "Get upcoming subscription renewals" })
});

export default subscriptionRouter;