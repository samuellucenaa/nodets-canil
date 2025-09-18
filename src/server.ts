import express from 'express';
import dotenv from 'dotenv';
import mustacheExpress  from 'mustache-express';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import mainRouter from './routes/index.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();

const app = express();

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

app.use(express.static(path.join(__dirname, '../public')))
app.use(mainRouter)

app.use((req,res)=>{
    res.render('pages/404')
})

app.listen(process.env.PORT)