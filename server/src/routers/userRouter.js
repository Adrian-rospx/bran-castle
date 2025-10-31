import { Router } from "express";
import * as userService from "../services/userService.js";

const userRouter = Router();

userRouter.get("/:id", async (req, res) => {
    const user_id = req.params.id;
    try {
        const user = await userService.getUser(user_id);
        res.status(200).json(user);
    } catch (err) {
        throw err;
    }
});

userRouter.post("/register", async (req, res) => {
    try {
        const user = await userService.registerUser(req.body);
        res.status(201).json(user);
    } catch (err) {
        throw err;
    }
})
userRouter.post("/login", async (req, res) => {
    try {
        const token = await userService.loginUser(req.body);
        res.status(200).json({token});
    } catch (err) {
        throw err;
    }
})

export default userRouter;