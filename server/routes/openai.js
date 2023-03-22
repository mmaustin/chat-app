import { openai } from "../index.js";
import express from 'express';
import axios from "axios";
import dotenv from 'dotenv';

dotenv.config();
const router = express.Router();

router.post('/text', async(req, res)=> {
    try {
        const {text, activeChatId} = req.body;
        
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: text,
            temperature: 0.5,
            max_tokens: 2048,
            top_p: 1,
            frequency_penalty: 0.5,
            presence_penalty: 0,
        })

        res.status(200).json({text});   
    } catch (error) {
        console.error('error', error);
        res.status(500).json({ error: error.message})
    }
});

export default router;
