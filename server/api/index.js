import express from 'express';

import voter from './voter';

const router = express.Router();
router.use('/voter', voter);

export default router;
