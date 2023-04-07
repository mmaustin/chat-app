import axios from "axios";
import { openai } from "../index.js";
import dotenv from 'dotenv';
import express from 'express';
const router = express.Router();


router.post('/login', async(req, res)=> {
    try {
        res.status(200).json({text: response.data.choices[0].text});   
    } catch (error) {
        console.error('error', error);
        res.status(500).json({ error: error.message})
        }
    });

router.post('/signup', async(req, res)=> {
    try {
        const {username, password} = req.body;

        const chatEngineResponse = await axios.post(
            "https://api.chatengine.io/users/",
            {
                username: username,
                secret: passoword
            },
            {
                headers: { "Private-Key": process.env.PRIVATE_KEY}
            }
        )

        res.status(200).json({text: response.data.choices[0].text});   
    } catch (error) {
        console.error('error', error);
        res.status(500).json({ error: error.message})
        }
    });

export default router;