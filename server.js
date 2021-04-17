const express = require('express');
const app = express();

const routes = require('./routes');

const PORT = process.env.PORT || 5000;

// configure body parser for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const root = require('path').join(__dirname, 'client', 'build')
app.use(express.static(root));
app.get("*", (req, res) => {
    res.sendFile('index.html', { root });
})

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}.`);
});



app.use(routes);