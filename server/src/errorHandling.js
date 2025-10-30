export class ServerError extends Error {
    constructor(message, name) {
        super(message);
        this.name = name;
    }
}

// general error handler
export function errorHandler(err, req, res, next) {
    console.error(err);

    if (err.name === "Not found") {
        return res.status(404).json({error: err.message});
    } else if (err.name === "Bad request") {
        return res.status(400).json({error: err.message});
    } else if (err.name === "Conflict") {
        return res.status(409).json({error: err.message});
    } else if (err.name === "Prisma error"){
        return res.status(500).json({error: err.message});
    } else {
        return res.status(500).json({error: "Server error"});
    }

}