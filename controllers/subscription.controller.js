import Subscription from "../models/subscription.model.js";


export const createSubscription = async (req, res, next) => {
    console.log(req.body);
    const body = {...req.body, startDate: new Date(req.body.startDate)}
    console.log(body);
    
    try {

        const subscription = await Subscription.create({
            ...body,
            user: req.user._id,
        });
       

        res.status(201).json({ success: true, data: subscription });
    } catch (error) {
        next(error);
    }
};