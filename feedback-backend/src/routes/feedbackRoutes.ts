import express, { Request, Response } from 'express';
import { Feedback } from '../models/Feedback';

const router = express.Router();

let feedbackEntries: Feedback[] = [];
let currentId = 1;

// Retrieve all feedback entries
router.get('/feedback', (req: Request, res: Response) => {
    res.json(feedbackEntries);
});

// Submit new feedback
router.post('/feedback', (req: Request, res: Response) => {
    const { name, feedback } = req.body;
    if (!name || !feedback) {
        return res.status(400).json({ error: 'Name and feedback are required.' });
    }

    const newFeedback: Feedback = { id: currentId++, name, feedback };
    feedbackEntries.push(newFeedback);
    res.status(201).json(newFeedback);
});

export default router;
