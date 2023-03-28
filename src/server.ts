// @ts-ignore
import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import { PostController } from './controllers/post.controller';

// Load environment variables
dotenv.config();

class Server {
    private postController: PostController;
    private app: express.Application;

    constructor() {
        this.app = express();
        this.configurations();
        this.postController = new PostController();
        this.routes();
    }

    /**
     * @description
     * @returns {void}
     * @private
     * Method to set configurations to the server
     */

    private configurations() {
        this.app.set('port', process.env.APP_PORT || 3000);
        this.app.set('host', process.env.APP_HOST || 'localhost');
    }


    /**
     * @description
     * @returns {void}
     * @private
     * Method to set routes to the server
     */
    private routes() {
        this.app.get('/', (req: Request, res: Response) => {
            res.send('Hello World!');
        });
        this.app.use('/api/posts/', this.postController.router);
    }


    /**
     * @description
     * @returns {void}
     * @public
     * Method to start the server
     */
    public start() {
        this.app.listen(this.app.get('port'), () => {
            console.log(`[Server]: Server is Running at ${this.app.get('host')}:${this.app.get('port')}`);
        });
    }
}

// Create a new instance of the server
const server = new Server();

// Start the server
server.start();