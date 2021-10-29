import "express-async-errors";
import express, { NextFunction, Response, Request } from 'express';
import { router } from './routes';
import cors from 'cors';

const app = express();

app.use(cors());

app.use(express.json())

app.use(router)


app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
    return response.json({
        status: "Error", 
        message: error.message,
    })
})

app.listen(3333, ()=> console.log("Server Run on port 3333")); 