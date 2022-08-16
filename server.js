import express from 'express';
const app = express();

const port = 3000;
const env = 'development';
app.get('/', function (req, res) {
  res.send('Hello World')
});

app.listen(process.env.PORT, () => {
    console.log(`⚡ listening on port ${process.env.PORT} in ${process.env.NODE_ENV} mode ⚡`);
});