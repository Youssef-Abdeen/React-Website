import './src/env';
import http from 'http'
import { Server } from './src/server';

const { PORT = 4000 } = process.env;

(async () => {
  const server = Server();

  await server.listen(PORT, async (err) => {
    if (err) throw err;
    console.log(`🚀 Server ready at http://localhost:${PORT}`);
  });

})();
