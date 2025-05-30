const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/analyze', (req, res) => {
    const businessCase = req.body.businessCase;
    console.log('Received:', businessCase);
    res.json({
        tasks: [
            "Task 1: Understand the problem",
            "Task 2: Break it into subtasks",
            "Task 3: Assign responsibilities",
            "Task 4: Set deadlines"
        ]
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
