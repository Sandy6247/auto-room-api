class HttpException extends Error {
    constructor(message, statusCode) {
        super(message);

        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith('4') ? 'failed' : 'error';
        this.isOperational = true;
        this.message = message;
        Error.captureStackTrace(this, this.constructor);
    }
}

export default HttpException;