import { ServerError } from "../errorHandling.js";
import * as postModel from "../models/postModel.js";

export async function getPosts() {
    const posts = await postModel.getPosts();
    return posts;
}
export async function getPost(id) {
    id = Number(id);
    try {
        const post = await postModel.getPost(id);
        return post;
    } catch (err) {
        if (err.code === "P2025")
            throw new ServerError("Post not found", "Not found");
        else
            throw err;
    }
}

export async function createPost(data) {
    const {title, content, author_id} = data;
    author_id = Number(author_id);

    if (!title || !content || !author_id)
        throw new ServerError("Title and content required!", "Bad request");

    data = {title, content, author_id};

    try {
        const result = await postModel.createPost(data);
        return result;
    } catch (err) {
        // to be tested
        throw err;
    }
}

export async function updatePost(id, data) {
    const {title, content, author_id} = data;
    author_id = Number(author_id);
    id = Number(id);

    if (!title || !content || !author_id)
        throw new ServerError("Title and content required!", "Bad request");

    data = {id, title, content, author_id};

    try{
        const result = await postModel.updatePost(data);
    } catch (err) {
        // to be tested
        throw err;
    }

    return result;
}

export async function deletePost(id) {
    id = Number(id);
    try {
        const result = await postModel.deletePost(id);
    } catch (err) {
        if (err.code === "P2025")
            throw new ServerError("Post not found", "Not found");
        else 
            throw err;
    }
}