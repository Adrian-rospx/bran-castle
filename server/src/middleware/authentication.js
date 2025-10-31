import jwt from "jsonwebtoken";

import { ServerError } from "../errorHandling.js";
import { getUser } from "../services/userService.js";

// JWT authorization implementation
export async function requireAuth(req, res, next) {
    const token = req.headers.authorization;

    if (!token)
        throw new ServerError("Login required", "Unauthorized");

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await getUser(decoded.sub);
        
        if (user.role !== decoded.role)
            throw new ServerError("Invalid token", "Unauthorized");
    } catch (err) {
        if (err instanceof jwt.TokenExpiredError || 
            err instanceof jwt.NotBeforeError || 
            err instanceof jwt.JsonWebTokenError)
            throw new ServerError("Invalid token", "Unauthorized");
        else
            throw err;
    }
    next();
}