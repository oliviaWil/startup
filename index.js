const express = require('express');
const app = express();

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the front-end static content hosting
app.use(express.static('public'));

// Your backend service endpoints
app.get('/api/data', (req, res) => {
    // Implement your backend logic here
    res.json({ message: 'Good Job!' });
});


// Default route for handling other requests and serving the frontend
app.use((_req, res) => {
    res.sendFile('index.html', { root: 'public' });
});

// The service port. In production, the front-end code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 8080;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
