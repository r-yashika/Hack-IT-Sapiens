const fetch = require('node-fetch');

const apiKey = 'AIzaSyDuTT2RobuzsjmYOfxUSH5ZyCaJh9N1zQ8';
const baseUrl = 'https://api.gemini.com';

// Function to make authenticated requests
async function makeAuthenticatedRequest(endpoint, method, payload = {}) {
    const requestOptions = {
        method,
        headers: {
            'Content-Type': 'application/json',
            'X-GEMINI-APIKEY': apiKey,
        },
        body: JSON.stringify(payload),
    };

    const response = await fetch(`${baseUrl}${endpoint}`, requestOptions);
    return await response.json();
}

// Example usage: Get account information
async function getAccountInfo() {
    try {
        const response = await makeAuthenticatedRequest('/account', 'POST');
        console.log('Account Info:', response);
    } catch (error) {
        console.error('Error:', error);
    }
}

// Call the function to get account information
getAccountInfo();
