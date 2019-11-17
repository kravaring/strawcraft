import { Router } from 'express';
import { getAllItems, updateItem, saveItem, deleteItem } from '../controllers/ItemsController';
const itemsRouter = Router();

itemsRouter.get('/', getAllItems);
itemsRouter.put('/:id', updateItem);
itemsRouter.delete('/:id', deleteItem);
itemsRouter.post('/', saveItem);

export default itemsRouter;