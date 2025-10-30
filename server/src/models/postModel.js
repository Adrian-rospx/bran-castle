import prisma from "./database";

// post crud operation definitions
export async function getPost(title) {
    return prisma.post.findFirstOrThrow( {where: {title}} );
}

export async function createPost(data) {
    return prisma.post.create( {data} );
}

export async function updatePost(id, author_id, data) {
    return prisma.post.update( {where: {id, author_id}, data} );
}

export async function deletePost(id) {
    return prisma.post.delete( {where: {id}} );
}