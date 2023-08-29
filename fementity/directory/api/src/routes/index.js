import express from 'express';

import businessRoutes from './business';
import articleRoutes from './article';

const router = express.Router();

router.use('/business', businessRoutes);
router.use('/article', articleRoutes )

export default router;
