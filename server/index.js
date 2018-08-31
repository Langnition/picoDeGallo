const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/../build'));

const PORT = process.env.PORT || 8085;

app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}`);
});