import { Request, Response } from 'express';
import { BAD_REQUEST, CREATED, OK } from 'http-status-codes';
import { StrawItemDao } from '@daos';
import { logger } from '@shared';

const itemsDao = new StrawItemDao();

export async function getAllItems(req: Request, res: Response){
    try {
        const items = await itemsDao.getAll();
        return res.status(OK).json({items});
    } catch (err) {
        logger.error(err.message, err);
        return res.status(BAD_REQUEST).json({
            error: err.message,
        });
    }
}
