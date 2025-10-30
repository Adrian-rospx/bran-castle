import { ServerError } from "../errorHandling.js";
import prisma from "./database.js";

// user operation definitions
export async function findUser(user_id) {
    try {
        return await prisma.user.findUniqueOrThrow( {where : {id : user_id}} );
    } catch (err) {
        if (err.code === "P2025")
            throw new ServerError("User not found", "Not found");
        else
            throw new ServerError("Could not find user", "Prisma error");
    }
}

export async function createUser(data) {
    try {
        const user = await prisma.user.create( {data} );
        return user;
    } catch (err) {
        if (err.code == "P2002")
            throw new ServerError("Username is taken", "Conflict");
        else
            throw new ServerError("Could not create user", "Prisma error");
    }
}

// export async function deleteUser(user_id) {
//     user_id = Number(user_id);
//     return prisma.user.delete( {where: {id : user_id}} );
// }