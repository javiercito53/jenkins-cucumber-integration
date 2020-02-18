const express = require('express')
const path = require("path");
// Create Express app
const app = express()
app.use(express.static(path.join(__dirname, "build")));
// A sample route
app.get('/', (req, res) => res.sendFile(path.join(__dirname, "build", "index.html")));
// Start the Express server
app.listen(80, () => console.log('Server running on port 80!'));