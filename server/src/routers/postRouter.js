import { Router } from "express";
import * as postModel from "../models/postModel.js";
import * as userModel from "../models/userModel.js";

const postRouter = Router();

postRouter.get("/", async (req, res) => {
    const posts = await postModel.getPosts();

    res.status(200).json(posts);
});

postRouter.post("/", async (req, res) => {
    const {title, content, author_id} = req.body;

    const result = await postModel.createPost({title, content, author_id});

    res.status(201).json(result);
});

export default postRouter;