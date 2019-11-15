import { Request, Response } from 'express';
import { BAD_REQUEST, CREATED, OK } from 'http-status-codes';
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
        return res.status(CREATED).json(item);
    } catch(err){
        return onError(err, res);
    }
}
