import express from 'express';

import { getAllMembers } from '../controllers/member';

const router = express.Router();

router.get('/', getAllMembers);

export default router;
