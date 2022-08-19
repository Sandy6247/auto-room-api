import './db.js';
import config from './src/config/env.config.js';
import router from './src/api/router.js';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import globalErrorHandler from './src/lib/globalErrorHandler.js';
 
const app = express();

//middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use(helmet());

//routes
router(app);

//error handler
app.use(globalErrorHandler);

app.listen(config.port, () => {
    console.log(`⚡ listening on port ${config.port} in ${config.node_env} mode ⚡`);
});