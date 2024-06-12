// src/index.ts
import express from 'express';
import feedbackRoutes from './routes/feedbackRoutes';

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Routes
app.use('/api', feedbackRoutes);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
