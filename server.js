import './db.js';
import config from './src/config/env.config.js';
import router from './src/api/router.js';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
 
const app = express();

//middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use(helmet());

//routes
router(app);

app.listen(config.port, () => {
    console.log(`⚡ listening on port ${config.port} in ${config.node_env} mode ⚡`);
});