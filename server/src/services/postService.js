import jwt from "jsonwebtoken";

import { ServerError } from "../errorHandling.js";
import * as postModel from "../models/postModel.js";

export async function getPosts() {
    const posts = await postModel.getPosts();
    return posts;
}
export async function getPost(post_id) {
    post_id = Number(post_id);
    try {
        const post = await postModel.getPost(post_id);
        return post;
    } catch (err) {
        if (err.code === "P2025")
            throw new ServerError("Post not found", "Not found");
        else
            throw err;
    }
}

export async function createPost(data, token) {
    // get author id
    token = jwt.decode(token);
    const author_id = Number(token.sub);

    // verify data
    const {title, content} = data;

    if (!title || !content)
        throw new ServerError("Title and content required!", "Bad request");

    data = {title, content, author_id};

    const result = await postModel.createPost(data);
    return result;
}

export async function updatePost(post_id, data, token) {
    token = jwt.decode(token);
    const author_id = Number(token.sub);
    
    const {title, content} = data;
    
    if (!title || !content)
        throw new ServerError("Title and content required!", "Bad request");
    
    post_id = Number(post_id);

    // verify owner
    const post = await getPost(post_id);
    if (post.author_id != author_id)
        throw new ServerError("Cannot access post", "Forbidden");

    data = {id: post_id, title, content, author_id};

    const result = await postModel.updatePost(data);
    return result;
}

export async function deletePost(post_id, token) {
    token = jwt.decode(token);
    const author_id = Number(token.sub);

    post_id = Number(post_id);

    // verify owner
    const post = await getPost(post_id);
    if (post.author_id != author_id)
        throw new ServerError("Cannot access resource", "Forbidden");
    
    await postModel.deletePost(post_id);
}