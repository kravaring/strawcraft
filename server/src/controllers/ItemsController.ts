import { Request, Response } from 'express';
import { BAD_REQUEST, CREATED, OK, NO_CONTENT } from 'http-status-codes';
import { StrawItemDao } from '@daos';
import { Item } from '@entities';
import { ApiError } from 'src/models/ApiError';
import { NextFunction } from 'connect';

const itemsDao = new StrawItemDao();

export async function getAllItems(req: Request, res: Response, next: NextFunction){
    try {
        const items = await itemsDao.getAll();
        return res.status(OK).json({items});
    } catch (err) {
        next(new ApiError(err.message, BAD_REQUEST));
    }
}

export async function saveItem(req: Request, res: Response, next: NextFunction){
    const item = req.body['item'] as Item;
    try{
        const savedItem = await itemsDao.add(item);
        return res.status(CREATED).json(savedItem);
    } catch(err){
        next(new ApiError(err.message, BAD_REQUEST));
    }
}

export async function deleteItem(req: Request, res: Response, next: NextFunction){
    const id = Number(req.params.id);
    try{
        const deletedItem = await itemsDao.delete(id);
        if(deletedItem){
            return res.status(OK).json(deletedItem);
        } else {
            return res.status(NO_CONTENT);
        }
    } catch(err){
        next(new ApiError(err.message, BAD_REQUEST));
    }
}

export async function updateItem(req: Request, res: Response, next: NextFunction){
    const item = req.body['item'] as Item;
    try{
        const updatedItem = await itemsDao.update(item);
        return res.status(OK).json(updatedItem);
    } catch(err){
        next(new ApiError(err.message, BAD_REQUEST));
    }
}