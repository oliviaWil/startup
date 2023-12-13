const express = require('express');
const app = express();
const joke = require('tell-me-a-joke');
const DB = require('/Users/oliviawilson/Downloads/CS260/startup/database.js');


// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the front-end static content hosting
app.use(express.static('public'));

var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// Your backend service endpoints
apiRouter.get('/data', async (req, res) => {
    // Implement your backend logic here
    res.json({ message: 'Good Job!' });
});

apiRouter.get('/joke', async (_req, res) => {
    joke.getRandomDadJoke((dadJoke) => {
        res.json({ joke: dadJoke });
    });
});

apiRouter.post('/solutions', async (req, res) => {
    console.log(req.body)
    DB.addSolution(req.body);

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
