import prisma from "./database.js";

// post crud operation definitions
export async function getPosts() {
    return prisma.post.findMany({take: 10});
}
export async function getPost(id) {
    return prisma.post.findFirstOrThrow( {where: {id}} );
}

export async function createPost(data) {
    return prisma.post.create( {data} );
}
export async function updatePost(data) {
    return prisma.post.update( {where: 
        {id: data['id'], author_id: data['author_id']}, 
        data
    } );
}
export async function deletePost(id) {
    return prisma.post.delete( {where: {id}} );
}