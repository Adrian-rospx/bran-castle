import { Router } from "express";
import { getPosts } from "../models/postModel.js";

const apiRouter = Router();

apiRouter.get("/posts", (res, req) => {
    const posts = getPosts();
    req.json(posts).status(200);
});

export default apiRouter;