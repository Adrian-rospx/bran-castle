import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import prisma from "./src/models/database.js";
import { errorHandler } from "./src/errorHandling.js";
import postRouter from "./src/routers/postRouter.js";
import userRouter from "./src/routers/userRouter.js";

dotenv.config({quiet: true});

const PORT = process.env.PORT || 3000;

const application = express();

// middleware configuration
application.use(express.json());

// application.use(cors({
//     origin: "http://localhost:5173"
// }));

// mount routers
application.use("/api/posts", postRouter);
application.use("/api/users", userRouter);

// error handler
application.use(errorHandler);

// start port listener
application.listen(PORT, () => {
    const date = new Date();
    const localDateTime = date.toLocaleString();
    const timezone = -date.getTimezoneOffset() / 60;
    const timezoneFormatted = Intl.NumberFormat("en-US", 
        {signDisplay: "exceptZero"}
    ).format(timezone);

    console.log(`\x1b[32mApplication running on port ${PORT}.`);
    console.log(`Process started at: ${localDateTime}, `+
        `UTC ${timezoneFormatted}:00 GMT\x1b[0m`);
});

// end message
function terminateProcess() {
    prisma.$disconnect();
    console.log(`\x1b[31m` + 
        `Process terminated at: ${new Date().toLocaleString()}\x1b[0m`);
    process.exit(1);
}

process.on("SIGINT", terminateProcess);
process.on("SIGTERM", terminateProcess);