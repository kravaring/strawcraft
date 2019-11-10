import { Router } from 'express';
import ItemsRouter from './Items';

// Init router and path
const router = Router();

// Add sub-routes
router.use('/items', ItemsRouter);

// Export the base-router
export default router;
