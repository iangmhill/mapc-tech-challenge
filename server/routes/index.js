import createMemoryHistory from 'history/createMemoryHistory';
import express from 'express';

import configureStore from './../../client/js/store';
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

export default router;
