const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.post('/submitForm', (req, res) => {
    const { name, email, message } = req.body;
    console.log('Form Data:', { name, email, message });
    res.json({ status: 'success', message: 'Message sent successfully!' });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
