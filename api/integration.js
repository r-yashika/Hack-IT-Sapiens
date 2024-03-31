const express = require('express');
const axios = require('axios');
const app = express();
const bodyParser = require('body-parser');

// Middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Your Moovly access token
const moovlyAccessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJNb292bHkiLCJhdWQiOiJwZXJzb25hbC1hY2Nlc3MtdG9rZW5zIiwianRpIjoiM2ZmMWNhMThkOTI3OGE1YTYwOTZkN2EwYWIxYzQ2YTAwZWU5YWMzMWNmNzA5ZGJiOGM5ODVmODE0ZWZhZmVkZDMwZWRiYmE3YTY1MzlmZmMiLCJpYXQiOjE3MTE4MTE4NTIuMTI2MjE1LCJleHAiOjE3Mjc3MDk0NTIuMTA1MTY2LCJzdWIiOiIzN2IwMWUwMi05MGYxLTQ0NzYtYjkyMS00YTE4MjdlMzY3ZjkiLCJ1c2VyX2lkIjoxMDU4MDE3MDUxLCJyb2xlcyI6WyJST0xFX1BFUlNPTkFMX0FDQ0VTU19UT0tFTiJdfQ.vBBOQa5Zm5GLZVjXUPh18Rg1_a3Pk_eqEihNlawEPHWE9yv2qptfTfA5BiYsHYWiQ_f5jjGGEVVuvP24J4SNKreZjFeBr30Ark-vxxNSvrVu-tpwpriX9a-VzJCdRMQdgbuIQzpUmrxLzhFK2ptVfmRyD_FweznKDMKTYKTiKq7dfgxYDkk_BuG-4DfFCaHX43ywqDRU_SU_38Qz8hCgIQXdxqimNJiMa7h0Pykx-DVtqa8PwacAlKmEjKVm8Ijmkc2goktKcX6ztOgRIjUg9i7PBsDBqytSUJD8ltIjYW7ROEzXKPS909Wb8msIGReVzffZpoouhA08Tw43S6UKIQ';
app.post('/generate-video', async (req, res) => {
    try {
      const question = req.body.question;
      const answer = req.body.answer;
      const language = req.body.language;
      const voicePreference = req.body.voicePreference;
      const templateId = 'YOUR_MOOVLY_TEMPLATE_ID';
  
      // Combine the question, answer, and your custom text
      const description = `Question: ${question}\nAnswer: ${answer}\n\nYour Custom Text: This video is generated using generative AI, Scripy, and a Moovly template.`;
  
      // Make a request to the Moovly API to create the video
      const moovlyResponse = await axios.post(
        'https://api.moovly.com/generator/v1/jobs',
        {
          template_id: templateId,
          options: {
            quality: '1080p',
            create_render: true,
            create_project: false,
          },
          values: [
            {
              external_id: 'your-reference-1',
              template_variables: {
                'DESCRIPTION_VARIABLE_ID': {
                  type: 'rich-text',
                  value: description,
                },
                'VOICE_VARIABLE_ID': {
                  type: 'tts',
                  value: description,
                  identifier: `${voicePreference};${language}`,
                },
              },
              modifications: {
                fonts: {
                  '$templateFont': 'Arial',
                },
                colors: {
                  '$templateColor': '#000000',
                },
              },
            },
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${moovlyAccessToken}`,
            'Content-Type': 'application/json',
          },
        }
      );
  
      const jobId = moovlyResponse.data.jobId;
      res.json({ jobId });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to create video' });
    }
  });........
  .