import { Router } from "express";
import * as postModel from "../models/postModel.js";
import * as userModel from "../models/userModel.js";

const postRouter = Router();

postRouter.get("/", async (req, res) => {
    const posts = await postModel.getPosts();

    res.status(200).json(posts);
});
postRouter.get("/:id", async (req, res) => {
    const id = req.params.id;

    const post = await postModel.getPost(id);

    res.status(200).json(post);
});

postRouter.post("/", async (req, res) => {
    const {title, content, author_id} = req.body;

    const result = await postModel.createPost({title, content, author_id});

    res.status(201).json(result);
});

postRouter.patch("/:id", async (req, res) => {
    const id = req.params.id;
    const {title, content, author_id} = req.body;
    const data = {id, title, content, author_id};
    
    const result = await postModel.updatePost(data);

    res.status(200).json(result);
})

postRouter.delete("/:id", async (req, res) => {
    const id = req.params.id;

    const result = postModel.deletePost(id);

    res.status(204).send();
});

export default postRouter;