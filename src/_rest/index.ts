import express, { Application } from "express";
import{ createConnection }from"typeorm";

import { Router } from './router'

// Application
const app: Application = express();
const port: Number = 3000;
const basePathV1: string = '/api/v1';

try {
    // Middlewares
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    // Router
    app.use(basePathV1, Router);

    // Database
    createConnection();

    app.listen(port, (): void => {
        console.log(`Connected successfully on port ${port}`);
    });
} catch (error) {
    console.error(`Error occured: ${error.message}`);
}