let config = {};

config.node_env = process.env.NODE_ENV;
config.port = process.env.PORT;

config.db_dialect = process.env.DB_DIALECT;
config.db_host = process.env.DB_HOST;
config.db_port = process.env.DB_PORT;
config.db_name = process.env.DB_NAME;
config.db_user = process.env.DB_USER;
config.db_password = process.env.DB_PASSWORD;

export default config;