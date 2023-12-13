const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('startup');
const solutionCollection = db.collection('solutions');
// console.log("made it to database.js")

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
  console.log("made it to testConnection")
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});

async function addSolution(solution) {
    console.log('Adding solution to the database:', solution);
    const result = await solutionCollection.insertOne(solution);
    return result;
  }

  module.exports = {addSolution};