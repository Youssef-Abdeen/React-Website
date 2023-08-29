import './src/env';
import { Server } from './src';
import { PrismaClient } from '@prisma/client';

const { PORT = 4000 } = process.env;

(async () => {
  const prisma = new PrismaClient();
  const server = await Server({context: {prisma}});

  await server.listen(PORT, async (err) => {
    if (err) throw err;
    console.log(`🚀 Server ready at http://localhost:${PORT}`);
  });

})();
