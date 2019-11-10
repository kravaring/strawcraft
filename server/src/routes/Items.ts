import { Router } from 'express';
import { getAllItems } from '../controllers/ItemsController';
const itemsRouter = Router();

itemsRouter.get('/', getAllItems);

export default itemsRouter;