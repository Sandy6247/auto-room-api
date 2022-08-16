import './db.js';
import config from './src/config/env.config.js';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
 
const app = express();

//middleware
//app.use(express.urlencoded({extented: true}));
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use(helmet());

app.get('/', function (req, res) {
  res.send('Hello World')
});
app.get('/hello', function (req, res) {
    res.send('Hello')
  });

app.listen(config.port, () => {
    console.log(`⚡ listening on port ${config.port} in ${config.node_env} mode ⚡`);
});