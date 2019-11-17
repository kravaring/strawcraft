import { Request, Response } from 'express';
import { BAD_REQUEST, CREATED, OK, NO_CONTENT } from 'http-status-codes';
import { StrawItemDao } from '@daos';
import { logger } from '@shared';
import { Item } from '@entities';

const itemsDao = new StrawItemDao();

function onError(err: Error, res: Response){
    logger.error(err.message, err);
    return res.status(BAD_REQUEST).json({
        error: err.message,
    });
}

export async function getAllItems(req: Request, res: Response){
    try {
        const items = await itemsDao.getAll();
        return res.status(OK).json({items});
    } catch (err) {
        return onError(err, res);
    }
}

export async function saveItem(req: Request, res: Response){
    const item = req.body['item'] as Item;
    try{
        const savedItem = await itemsDao.add(item);
        return res.status(CREATED).json(savedItem);
    } catch(err){
        return onError(err, res);
    }
}

export async function deleteItem(req: Request, res: Response){
    const id = Number(req.params.id);
    try{
        const deletedItem = await itemsDao.delete(id);
        if(deletedItem){
            return res.status(OK).json(deletedItem);
        } else {
            return res.status(NO_CONTENT);
        }
    } catch(err){
        return onError(err, res);
    }
}

export async function updateItem(req: Request, res: Response){
    const item = req.body['item'] as Item;
    try{
        const updatedItem = await itemsDao.update(item);
        return res.status(OK).json(updatedItem);
    } catch(err){
        return onError(err, res);
    }
}