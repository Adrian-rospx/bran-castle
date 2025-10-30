import { ServerError } from "../errorHandling.js";
import * as userModel from "../models/userModel.js";

export async function getUser(user_id) {
    user_id = Number(user_id);
    
    if (!user_id)
        throw new ServerError("incorrect id", "Bad request");

    const user = await userModel.findUser(user_id);
    return user;
}

export async function registerUser(body) {
    const {name, password} = body;

    if (!name || !password) {
        throw new ServerError("name and password required!", "Bad request");
    }
    
    const data = {name, password};

    const user = await userModel.createUser(data);
    return user;
}