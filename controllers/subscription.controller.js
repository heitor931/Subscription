import Subscription from "../models/subscription.model.js";


export const createSubscription = async (req, res, next) => {
    const date = new Date()
    console.log(date);
    
   // console.log(req.body);
    
    try {

        const subscription = await Subscription.create({
            ...req.body,
            user: req.user._id,
        });
       

        res.status(201).json({ success: true, data: subscription });
    } catch (error) {
        next(error);
    }
};