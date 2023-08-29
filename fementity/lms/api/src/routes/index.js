import express from 'express';

import businessRoutes from './business';

const router = express.Router();

router.use('/business', businessRoutes);

export default router;
