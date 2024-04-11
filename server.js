const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(bodyParser.urlencoded({ extended: true }));

// Parse JSON bodies (as sent by API clients)
app.use(bodyParser.json());

// Handle POST requests to '/submit-form'
app.post('/submit-form', (req, res) => {
    const formData = req.body;
    // Here you can process the form data as needed, for example, you can save it to a database
    console.log('Received form data:', formData);
    // Send a response back to the client
    res.send('Form data received successfully!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
