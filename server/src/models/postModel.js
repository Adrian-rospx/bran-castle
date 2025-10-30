import prisma from "./database.js";

// post crud operation definitions
export async function getPosts() {
    return prisma.post.findMany({take: 10});
}
export async function getPost(id) {
    id = Number(id);
    return prisma.post.findFirstOrThrow( {where: {id}} );
}

export async function createPost(data) {
    data['author_id'] = Number(data['author_id']);
    return prisma.post.create( {data} );
}
export async function updatePost(data) {
    data['author_id'] = Number(data['author_id']);
    data['id'] = Number(data['id']);
    return prisma.post.update( {where: 
        {id: data['id'], author_id: data['author_id']}, 
        data
    } );
}
export async function deletePost(id) {
    id = Number(id);
    return prisma.post.delete( {where: {id}} );
}