// Server.js file

const express = require('express');
const fetch = require('node-fetch'); 
const cors = require('cors'); 

const app = express();

app.use(cors()); 

// Serve static files from the 'docs' directory
app.use(express.static('docs'));

// Define a route handler for the root URL
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/docs/Portfolio.html');
});

// Your existing proxy endpoint for fetching repository details
app.get('/fetch-repo/:repoName', async (req, res) => {
    const { repoName } = req.params;
    const response = await fetch(`https://api.github.com/repos/${username}/${repoName}`, {
        headers: {
            Authorization: `token ${process.env.GITHUB_PERSONAL_ACCESS_TOKEN}`
        }
    });
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    res.json(data);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}. Access the website at http://localhost:${PORT}`);
});