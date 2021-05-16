import express, { Application } from "express";
import{ createConnection }from"typeorm";
import { JWTAuth } from "./middlewares/auth/jwt";
import { Recovery } from "./middlewares/recovery/recovery";

import { Router, PublicRouter } from './router'

// Application
const app: Application = express();
const port: Number = 3000;
const basePathV1: string = '/api/v1';

try {
    // Database
    createConnection();

    // Middlewares PreRequest
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    // Public Router
    app.use(basePathV1, PublicRouter);

    // Private Router
    app.use(JWTAuth)
    app.use(basePathV1, Router);

    // Middlewares PostRequest
    app.use(Recovery);

    // Run
    app.listen(port, (): void => {
        console.log(`Connected successfully on port ${port}`);
    });
} catch (error) {
    console.error(`Error occured: ${error.message}`);
}