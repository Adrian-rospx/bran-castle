import { PrismaClient } from '../../generated/prisma/client.ts';

// main prisma database client
const prisma = new PrismaClient();

export default prisma;