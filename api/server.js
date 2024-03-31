const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const port = 3000;

// Parse incoming request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Moovly API credentials
const MOOVLY_API_KEY = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJNb292bHkiLCJhdWQiOiJwZXJzb25hbC1hY2Nlc3MtdG9rZW5zIiwianRpIjoiM2ZmMWNhMThkOTI3OGE1YTYwOTZkN2EwYWIxYzQ2YTAwZWU5YWMzMWNmNzA5ZGJiOGM5ODVmODE0ZWZhZmVkZDMwZWRiYmE3YTY1MzlmZmMiLCJpYXQiOjE3MTE4MTE4NTIuMTI2MjE1LCJleHAiOjE3Mjc3MDk0NTIuMTA1MTY2LCJzdWIiOiIzN2IwMWUwMi05MGYxLTQ0NzYtYjkyMS00YTE4MjdlMzY3ZjkiLCJ1c2VyX2lkIjoxMDU4MDE3MDUxLCJyb2xlcyI6WyJST0xFX1BFUlNPTkFMX0FDQ0VTU19UT0tFTiJdfQ.vBBOQa5Zm5GLZVjXUPh18Rg1_a3Pk_eqEihNlawEPHWE9yv2qptfTfA5BiYsHYWiQ_f5jjGGEVVuvP24J4SNKreZjFeBr30Ark-vxxNSvrVu-tpwpriX9a-VzJCdRMQdgbuIQzpUmrxLzhFK2ptVfmRyD_FweznKDMKTYKTiKq7dfgxYDkk_BuG-4DfFCaHX43ywqDRU_SU_38Qz8hCgIQXdxqimNJiMa7h0Pykx-DVtqa8PwacAlKmEjKVm8Ijmkc2goktKcX6ztOgRIjUg9i7PBsDBqytSUJD8ltIjYW7ROEzXKPS909Wb8msIGReVzffZpoouhA08Tw43S6UKIQ';

// Endpoint to create video based on user prompts
app.post('/create-video', async (req, res) => {
    try {
        const { prompt } = req.body;

        // Prepare data for Moovly API request
        const videoInstructions = {
            elements: [
                { type: 'text', content: prompt, position: { x: 100, y: 100 } }
            ]
        };

        // Make request to Moovly API
        const response = await axios.post('https://api.moovly.com/v1/videos', videoInstructions, {
            headers: {
                'Authorization': `Bearer ${MOOVLY_API_KEY}`,
                'Content-Type': 'application/json'
            }
        });

        // Return video URL to frontend
        res.json({ videoUrl: response.data.video_url });
    } catch (error) {
        console.error('Error creating video:', error);
        res.status(500).json({ error: 'Failed to create video' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
