import express from 'express';
import rateLimit from '../middleware/rateLimiter.js';
import quotes from '../data/quotes.js';

const router = express.Router();

router.get('/quote', rateLimit, (req, res) => {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    res.json({ 
            success: true,
            message: "Quote fetched successfully", 
            data: quote 
        });
});c

export default router;