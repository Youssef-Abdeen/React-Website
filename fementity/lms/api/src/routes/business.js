import express from 'express';

import { getAllBusinesses } from '../controllers/business';

const router = express.Router();

router.get('/', getAllBusinesses);

export default router;
