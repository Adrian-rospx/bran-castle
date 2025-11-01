import { ServerError } from "../errorHandling.js";
import prisma from "./database.js";

// post crud operation definitions
export async function getPosts() {
    try {
        return prisma.post.findMany({
            include: {
                author: {
                    omit: {password: true}
                }
            }
        });
    } catch (err) {
        throw new ServerError("Could not get posts", "Prisma error");
    }
}
export async function getPost(id) {
    try {
        const post = prisma.post.findFirstOrThrow( {
            where: {id},
            include: {
                author: {
                    omit: {password: true}
                }
            }
        } );
        return post;
    } catch (err) {
        if (err.code === "P2025")
            throw new ServerError("Post not found", "Not found");
        else 
            throw new ServerError("Could not find post", "Prisma error");
    }
}

export async function createPost(data) {
    try {
        return prisma.post.create( {select: {
            title: data.title,
            content: data.content,
            author_id: data.author_id
        }} );
    } catch (err) {
        // to be tested
        throw err;
    }
}
export async function updatePost(data) {
    try {
        return prisma.post.update( {where: 
            {id: data.id, author_id: data.author_id},
            data: {
                content: data.content
            }
        } );
    } catch (err) {
        if (err.code === "P2025") 
            throw new ServerError("Post not found", "Not found");
        else 
            throw new ServerError("Could not update post", "Prisma error");
    }
}
export async function deletePost(id) {
    try {
        return prisma.post.delete( {where: {id}} );
    } catch (err) {
        if (err.code === "P2025")
            throw new ServerError("Post not found", "Not found");
        else 
            throw new ServerError("Could not delete post", "Prisma error");
    }
}