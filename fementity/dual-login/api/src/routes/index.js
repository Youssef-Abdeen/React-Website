import express from 'express';

import businessRoutes from './business';

import memberRoutes from './member';

const router = express.Router();

router.use('/business', businessRoutes);

router.use('/member', memberRoutes);

export default router;

