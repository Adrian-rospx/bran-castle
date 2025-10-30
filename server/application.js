import express from "express";
import dotenv from "dotenv";

import prisma from "./src/models/database.js";

dotenv.config({quiet: true});

const PORT = process.env.PORT || 3000;

const application = express();

application.listen(PORT, () => {
    const date = new Date();
    const localDateTime = date.toLocaleDateString();
    const timezone = -date.getTimezoneOffset() / 60;
    const timezoneFormatted = Intl.NumberFormat("en-US", 
        {signDisplay: "exceptZero"}
    ).format(timezone);

    console.log(`\x1b[32mApplication running on port ${PORT}.`);
    console.log(`Process started at: ${localDateTime}, `+
        `UTC ${timezoneFormatted}:00 GMT\x1b[0m`);
});


function terminateProcess() {
    prisma.$disconnect();
    console.log(`\x1b[31m` + 
        `Process terminated at: ${new Date().toLocaleString()}\x1b[0m`);
    process.exit(1);
}

process.on("SIGINT", terminateProcess);
process.on("SIGTERM", terminateProcess);