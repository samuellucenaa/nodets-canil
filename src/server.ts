import express from 'express';
import dotenv from 'dotenv';
import mustacheExpress  from 'mustache-express';
import path from 'path';

dotenv.config();

const app = express();
app.use(express.static('../public'))

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

app.listen(process.env.PORT)