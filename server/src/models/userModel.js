import prisma from "./database.js";

// user operation definitions
export async function getUser(user_id) {
    return prisma.user.findUniqueOrThrow( {where : {id : user_id}} );
}

export async function createUser(data) {
    return prisma.user.create( {data} );
}

export async function deleteUser(user_id) {
    return prisma.user.delete( {where: {id : user_id}} );
}