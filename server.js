const express = require('express');
const app = express();
const port = 8080;  // You can change this to the port you want to use
const cors = require('cors');

app.use(cors());

app.use(express.static('.'));

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
``