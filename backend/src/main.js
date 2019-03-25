import express from "express";
import { userRoutes } from './routes/index'; 
import { PORT, NODE_ENV } from "./config";

const app = express();

app.disable('x-powered-by');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const apiRouter = express.Router();
app.use('/api', apiRouter);
apiRouter.use('/users', userRoutes);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));