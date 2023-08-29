import express from 'express';

import {
    getAllArticles
} from '../controllers/article';

const router = express.Router();

router.get('/', getAllArticles);

export default router;
