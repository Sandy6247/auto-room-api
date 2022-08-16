import config from './src/config/env.config.js';
import mongoose from "mongoose";

console.log(`${config.db_dialect}://${config.db_user}:${config.db_password}@${config.db_host}:${config.db_port}/${config.db_name}`);
mongoose.connect(`${config.db_dialect}://${config.db_user}:${config.db_password}@${config.db_host}:${config.db_port}/${config.db_name}`, {
   // useUnifiedTopology: true,
   // useNewUrlParser: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, '⚠️ Error during database connexion ! ⚠️'));
db.once('open', () => {
    console.log(`⚡ connected to database ${config.db_name} Success ! ⚡`);
});