import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import router from './routes';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(router);

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});