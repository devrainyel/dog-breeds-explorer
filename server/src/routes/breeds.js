import { Router } from 'express';
import { listBreeds } from '../controllers/breedsController.js';

const router = Router();
router.get('/', listBreeds);
export default router;