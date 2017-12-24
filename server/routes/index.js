import createMemoryHistory from 'history/createMemoryHistory';
import express from 'express';

import {
  resultsLoad,
} from './../../client/js/actions/results';
import configureStore from './../../client/js/store';
import log from './../utils/log';
import models from './../models';
import render from './../utils/render';

const router = express.Router();

router.get('/', (req, res) => {
  const store = configureStore({}, createMemoryHistory());
  return res
      .set('Content-Type', 'text/html')
      .set('Cache-Control', 'max-age=604800')
      .status(200)
      .send(render(store.getState()));
});

router.get('/results', (req, res) => {
  const store = configureStore({}, createMemoryHistory());
  models.Voter.findAll({
    attributes: ['address', 'jsonPoint', 'supportsCandidate'],
    raw: true,
  })
  .then((voters) => {
    store.dispatch(resultsLoad(voters));
    return res
        .set('Content-Type', 'text/html')
        .set('Cache-Control', 'max-age=604800')
        .status(200)
        .send(render(store.getState()));
  })
  .catch((err) => {
    log.error(err);
    return res
        .set('Content-Type', 'text/html')
        .set('Cache-Control', 'max-age=604800')
        .status(200)
        .send(render(store.getState()));
  });
});

router.get('*', (req, res) => res.redirect('/'));

export default router;
