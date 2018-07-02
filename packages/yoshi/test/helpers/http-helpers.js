const express = require('express');
const { join } = require('path');
const { exec } = require('child_process');
const { writeFileSync } = require('fs');

module.exports = {
  takePort(port) {
    return new Promise(resolve => {
      const server = express().listen(port, () => resolve(server));
    });
  },
  takePortFromAnotherProcess(cwd, port) {
    const toExecute = `
          const http = require('http');
          const server = http.createServer();
          server.listen(${port}, 'localhost');

          process.on('SIGINT', () => {
            server.close(() => {
              process.exit();
            });
          });
        `;

    writeFileSync(join(cwd, 'use-port.js'), toExecute, {
      encoding: 'utf-8',
    });

    return exec('node use-port.js', { cwd });
  },
};
