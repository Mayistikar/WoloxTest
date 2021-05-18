import express, { Application } from "express";
import{ createConnection }from"typeorm";
import { JWTAuth } from "./middlewares/auth/jwt";
import { Recovery } from "./middlewares/recovery/recovery";
import dotenv from 'dotenv';

import { Router, PublicRouter } from './router'

// Application
dotenv.config();
const cors = require('cors');
const app: Application = express();
const port: Number = Number.parseInt(process.env.PORT);
const basePathV1: string = '/api/v1';

try {
    // Database
    createConnection();

    // Middlewares PreRequest
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cors());

    // Public Router
    app.use(basePathV1, PublicRouter);

    // Private Router
    app.use(JWTAuth)
    app.use(basePathV1, Router);

    // Middlewares PostRequest
    app.use(Recovery);

    // Run
    app.listen(port, (): void => {
        console.log(`Connected successfully on port ${port} \n`);
        console.log(`
        O))        O))    O))))     O))          O))))     O))      O))
        O))        O))  O))    O))  O))        O))    O))   O))   O))  
        O))   O)   O))O))        O))O))      O))        O))  O)) O))   
        O))  O))   O))O))        O))O))      O))        O))    O))     
        O)) O) O)) O))O))        O))O))      O))        O))  O)) O))   
        O) O)    O))))  O))     O)) O))        O))     O))  O))   O))  
        O))        O))    O))))     O))))))))    O))))     O))      O))
        `)
        console.log(`\n To see docs: http://localhost:${port}${basePathV1}/api-docs or https://documenter.getpostman.com/view/5831053/TzRYbQ34`);        
        
    });
} catch (error) {
    console.error(`Error occured: ${error.message}`);
}