import { openai } from "../index.js";
import express from 'express';
import axios from "axios";
import dotenv from 'dotenv';

dotenv.config();
const router = express.Router();

router.post('/text', async(req, res)=> {
    try {
        const {text, activeChatId} = req.body;    
    } catch (error) {
        console.error('error', error);
        res.status(500).json({ error: error.message})
    }
});

export default router;
