import express from 'express';

import { 
    getAllBusinesses, 
    getAllLocations, 
    getAllCategories, 
    getAllServices,
    getSimilar
  } from '../controllers/business';

const router = express.Router();

router.get('/', getAllBusinesses);

router.get('/locations', getAllLocations);

router.get('/categories', getAllCategories);

router.get('/services', getAllServices);

router.get('/search', getSimilar);

export default router;
