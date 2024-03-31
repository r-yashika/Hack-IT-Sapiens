const express = require('express');
const axios = require('axios');
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Hypothetical route to create a video
app.post('/create-video', async (req, res) => {
  try {
    const { template_id, variables, output } = req.body;

    // Make the API request to start the video creation job
    const response = await axios.post(
      'https://api.moovly.com/projects',
      {
        template_id,
        variables,
        output,
      },
      {
        headers: {
          Authorization: `Bearer YOUR_ACCESS_TOKEN`,
          'Content-Type': 'application/json',
        },
      }
    );

    const jobId = response.data.jobId;
    res.json({ jobId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create video' });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});