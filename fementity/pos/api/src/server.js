import { PrismaClient } from '@prisma/client';
import cors from 'cors';
import http from 'http';
import express from 'express';

import routes from './routes';

export const Server = () => {
  const app = express();

  // To access prisma in any child function you can do the following in any callback:
  // const client = req.prisma;
  const prismaMiddleware = (req, res, next) => {
    req.prisma = new PrismaClient();
    next();
  };

  // Setup Middleware
  app.use('*', cors());
  app.use(express.json());
  app.use(prismaMiddleware);

  app.get('/alive', (_req, res) => {
    res.json({ ok: 'yes' });
  });

  app.get('/ready', (_req, res) => {
    res.json({ ok: 'yes' });
  });

  // All routes are available at the /api/... endpoint
  app.use('/api', routes);

  return http.createServer(app);
};
