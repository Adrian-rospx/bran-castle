import { Router } from "express";
import { createUser, getUser } from "../models/userModel.js";

const userRouter = Router();

userRouter.get("/:id", async (req, res) => {
    const user_id = req.params.id;

    const user = await getUser(user_id);
    console.log(user);

    res.status(200).json(user);
});

userRouter.post("/", async (req, res) => {
    const {name, password} = req.body;
    const data = {name, password};

    const user = await createUser(data);
    console.log(user);

    res.status(201).json(user);
})

export default userRouter;