import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

// All routes will be here

export default app;
