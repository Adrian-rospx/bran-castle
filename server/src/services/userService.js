import * as bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { ServerError } from "../errorHandling.js";
import * as userModel from "../models/userModel.js";

const saltRounds = 15;

export async function getUser(user_id) {
    user_id = Number(user_id);
    
    if (!user_id)
        throw new ServerError("incorrect id", "Bad request");

    const user = await userModel.findUser(user_id);
    return user;
}

export async function registerUser(body) {
    const {name, password} = body;

    if (!name || !password)
        throw new ServerError("name and password required!", "Bad request");

    // hash password
    const hash = await bcrypt.hash(password, saltRounds);
    const data = {name, "password": hash};

    const user = await userModel.createUser(data);
    return user;
}

export async function loginUser(body) {
    const {name, password} = body;

    if (!name || !password)
        throw new ServerError("name and password required!", "Bad request");

    const user = await userModel.findUserPrivate(name);

    const result = await bcrypt.compare(password, user.password);

    if (!result)
        throw new ServerError("Wrong username or password!", "Unauthorized");

    const token = jwt.sign({role: user.role}, process.env.JWT_SECRET, {
        issuer: "bran_castle", 
        subject: user.id.toString(),
        expiresIn: "10h"
    });

    return token;
}