import express from 'express'
import todoRoutes from './routes/todo';
import { execPath } from 'process';


const app = express();
app.use(express.json())
app.use(todoRoutes)

app.listen(4000);