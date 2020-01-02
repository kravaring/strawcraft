import cookieParser from 'cookie-parser';
import express, { Request, Response, NextFunction} from 'express';
import { NOT_FOUND } from 'http-status-codes';
import logger from 'morgan';
import { logger as log } from '@shared';
import BaseRouter from './routes';
import { ApiError } from './models/ApiError';

// Init express
const app = express();

// Add middleware/settings/routes to express.
app.disable('x-powered-by');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use('/api', BaseRouter);
app.use('/api', (error: Error, request: Request, response: Response, next: NextFunction ) => {
    console.log('central err handling')
    log.error(error);
    if(response.headersSent){
        return next(error);
    }
    if(error instanceof ApiError){
        response.status(error.status);
        response.json({error: error.message});
    } else {
        response.status(500);
        const resJSON = process.env.NODE_ENV === 'development' ? 
            {error: 'Internal server error', stack: error.stack} :
            {error: 'Internal server error'};
        response.json(resJSON);
    }
});

app.use('*', (request: Request, response: Response) => {
    response.status(NOT_FOUND).send();
});

// Export express instance
export default app;
