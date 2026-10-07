import aj from "../config/arcjet.js";

const arcejetMiddleware = async (req, res, next) => {
    // Check if the request is from a bot
    try {

        const decision = await aj.protect(req, { requested: 1 });

        if (decision.isDenied()) {
            if (decision.reason.isRateLimit()) {
                return res.status(429).json({ success: false, message: "Rate limit exceeded" });
            }

            // if (decision.reason.isBot()) {
            //     return res.status(403).json({ success: false, message: "Bot detected" });
            // }
        }

        next();


    } catch (error) {
        console.error("Error in Arcjet middleware:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
        next(error);
    }

}

export default arcejetMiddleware;
