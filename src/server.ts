// import express, { Express, Request, Response } from 'express';
// import dotenv from 'dotenv';

// dotenv.config();

// const app: Express = express();
// // const port = process.env.PORT;
// const port = 2000;

// app.get('/', (req: Request, res: Response) => {
//   res.send('Express + TypeScript Server');
// });

// app.listen(port, () => {
// console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
// });
import http from "http";

// import controller
import { getTasks, addTask, updateTask, deleteTask } from "./controller";

const port = 3000;

// create the http server
const server = http.createServer((req: any, res: any) => {
  // get tasks
  if (req.method == "GET" && req.url == "/api/tasks") {
    return getTasks(req, res);
  }

  // Creating a task
  if (req.method == "POST" && req.url == "/api/tasks") {
    return addTask(req, res);
  }

  // Updating a task
  if (req.method == "PUT" && req.url == "/api/tasks") {
    return updateTask(req, res);
  }

  // Deleting a task
  if (req.method == "DELETE" && req.url == "/api/tasks") {
    return deleteTask(req, res);
  }
});

// set up the server port and listen for connections
server.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});