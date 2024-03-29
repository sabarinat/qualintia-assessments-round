import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import {findDistance} from './controller/spacecraft-control'
import bodyParser from 'body-parser';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());

app.post("/", findDistance);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
console.log('yes');
