import { Router } from "express";
import * as postService from "../services/postService.js";
import { requireAuth } from "../middleware/authentication.js";

const postRouter = Router();

postRouter.get("/", async (req, res) => {
    const posts = await postService.getPosts();

    res.status(200).json(posts);
});
postRouter.get("/:id", async (req, res) => {
    const post_id = req.params.id;

    const post = await postService.getPost(post_id);

    res.status(200).json(post);
});

postRouter.post("/", requireAuth,  async (req, res) => {
    const token = req.headers.authorization;

    const result = await postService.createPost(req.body, token);

    res.status(201).json(result);
});

postRouter.patch("/:id", requireAuth, async (req, res) => {
    const token = req.headers.authorization;
    const post_id = req.params.id;
    
    const result = await postService.updatePost(post_id, req.body, token);

    res.status(200).json(result);
})

postRouter.delete("/:id", requireAuth, async (req, res) => {
    const token = req.headers.authorization;
    const post_id = req.params.id;

    await postService.deletePost(post_id, token);
    
    res.status(204).send();
});

export default postRouter;