import express, { Application } from "express";
import { Router } from './router'

const app: Application = express();
const port: Number = 3000;
const basePathV1: string = '/api/v1';

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Router
app.use(basePathV1, Router);

try {
    app.listen(port, (): void => {
        console.log(`Connected successfully on port ${port}`);
    });
} catch (error) {
    console.error(`Error occured: ${error.message}`);
}