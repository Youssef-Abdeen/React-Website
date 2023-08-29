const { join, resolve } = require('path');
const express = require('express');

const staticPath = join(resolve(process.cwd()), 'build');

function Server() {
  const server = express();

  server.get('/alive', (_req, res) => {
    res.json({ status: 'ok' });
  });

  server.get('/ready', (_req, res) => {
    res.json({ status: 'ready' });
  });

  server.use('/', express.static(staticPath));

  server.get('*', (_req, res) => {
    res.sendFile(resolve(join('build', 'index.html')));
  });

  return server;
}

module.exports.Server = Server;
