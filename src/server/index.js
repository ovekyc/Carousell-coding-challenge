import express from 'express';
import config from 'config';
import path from 'path';
import apiRoutes from './api-routes';

export default (cb) => {
  const app = express();

  app.use('/javascripts', express.static(path.join(__dirname, '../../dist-client/javascripts')));
  app.use('/', express.static(path.join(__dirname, '../../dist-client')));

  app.use('/api', apiRoutes);

  app.get('*', (req, res) => {
    res.status(404).send('server/index.js > 404 - Page Not Found');
  });

  // global error catcher, need four arguments
  app.use((err, req, res) => {
    /* eslint-disable no-console */
    console.error('Error on request %s %s', req.method, req.url);
    console.error(err.stack);
    /* eslint-enable */
    res.status(500).send('Server error');
  });

  process.on('uncaughtException', evt => {
    console.log('uncaughtException: ', evt); // eslint-disable-line no-console
  });

  const port = process.env.PORT || config.port;
  const server = app.listen(port, cb ? cb : () => {
    console.log(`Listening on port ${port}`); // eslint-disable-line no-console
  });
  return server;
};
