const express = require('express');
const app = express();

const PORT = process.env.HTTP_PORT || 8080;

// Sample function to process requests to the root
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Create a server to listen requests
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}!`);
});
