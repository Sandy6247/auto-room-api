import config from '../config/env.config.js';
import { DEVELOPMENT, PRODUCTION, STAGING } from '../config/constants/index.js';


const environnement = config.node_env;

const sendError = (err, req, res, next) => {  
    err.statusCode ? err.statusCode : 500;
    err.status ? err.status : 'error';
    
    switch (environnement) {
        case DEVELOPMENT:
            return sendErrorDev(err, req, res, next);
        case PRODUCTION:
            return sendErrorProd(err, req, res, next);
        case STAGING:
            return sendErrorProd(err, req, res, next);
        default:
            return sendErrorProd(err, req, res, next);
    }
};

const sendErrorDev = (err, req, res, next) => {
    const error = {
        statusCode: err.statusCode,
        message: err.message,
        path: req.url,
        timestamp: new Date().toISOString(),
        status: err.status,
        isOperational: err.isOperational,
        stack: err.stack,
    };
    
    return res.status(err.statusCode).json(error);
}; 

const sendErrorProd = (err, req, res, next) => {
    if (err.isOperational) {
        const error = {
            statusCode: err.statusCode,
            status: err.status,
            message: err.message,
        };

        return res.status(err.statusCode).json(error);
    } else {
        console.error('ERROR 🔥', err);

        const unhandledError = {
            statusCode: 500,
            status: 'error',
            message: 'Internal server error',
        };

        return res.status(500).json(unhandledError);
    }
};

export default sendError;
