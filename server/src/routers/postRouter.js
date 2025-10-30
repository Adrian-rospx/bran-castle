import { Router } from "express";
import * as postService from "../services/postService.js";

const postRouter = Router();

postRouter.get("/", async (req, res) => {
    const posts = await postService.getPosts();

    res.status(200).json(posts);
});
postRouter.get("/:id", async (req, res) => {
    const id = req.params.id;
    const post = await postService.getPost(id);

    res.status(200).json(post);
});

postRouter.post("/", async (req, res) => {
    const result = await postService.createPost(req.body);

    res.status(201).json(result);
});

postRouter.patch("/:id", async (req, res) => {
    const id = req.params.id;
    
    const result = await postService.updatePost(id, req.body);

    res.status(200).json(result);
})

postRouter.delete("/:id", async (req, res) => {
    const id = req.params.id;

    await postService.deletePost(id);
    
    res.status(204).send();
});

export default postRouter;