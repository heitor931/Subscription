import Subscription from "../models/subscription.model.js";
import { workflowClient } from "../config/upstash.js";
import { SERVER_URL } from "../config/env.js";


export const createSubscription = async (req, res, next) => {

    try {
        const subscription = await Subscription.create({
            ...req.body,
            user: req.user._id,
        });

        //console.log(subscription);
        

        const { workflowRunId } = await workflowClient.trigger({
            url: `${SERVER_URL}/api/v1/workflows/subscription/reminder`,
            body: {
                subscriptionId: subscription._id
            },
            headers: {
                'content-type': 'application/json'
            },
            retries: 0,

        })


        res.status(201).json({ success: true, data: {subscription, workflowRunId,} });
    } catch (error) {
        next(error);
    }
};