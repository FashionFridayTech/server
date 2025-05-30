import express from 'express';
import cors from 'cors';
import userRoutes from './modules/user/user.route';

const app = express();

app.use(cors());
app.use(express.json());

// All routes will be here
app.use('/api/users', userRoutes);

export default app;
