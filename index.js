const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', (req, res) => {
// 	res.status(200);
// 	res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// app.get('/about', (req, res) => {
//     res.status(200);
// 	res.sendFile(path.join(__dirname, 'public', 'about.html'));
// });

// app.get('/contact', (req, res) => {
//     res.status(200);
// 	res.sendFile(path.join(__dirname, 'public', 'contact.html'));
// });

app.use('/', require('./routes/home.js'));
app.use('/about', require('./routes/about.js'));
app.use('/contact', require('./routes/contact.js'));

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}...`);
});
