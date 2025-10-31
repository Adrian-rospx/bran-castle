
// Server error convinience class
export class ServerError extends Error {
    constructor(message, name) {
        super(message);
        this.name = name;
    }
}

// general error handler
export function errorHandler(err, req, res, next) {
    console.error(err);

    switch (err.name) {
        case "Bad request":
            return res.status(400).json({error: err.message});
        case "Unauthorized":
            return res.status(401).json({error: err.message});
        case "Not found":
            return res.status(404).json({error: err.message});
        case "Conflict":
            return res.status(409).json({error: err.message});
        case "Prisma error":
            return res.status(500).json({error: err.message});
        default:
            return res.status(500).json({error: "Server error"});
    }
}