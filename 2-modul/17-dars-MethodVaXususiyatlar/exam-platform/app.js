// app.js
import express from 'express';
import path from 'path';

const app = express();
const port = 3000; // Change this port number as needed

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const questions = [
    { id: 1, question: 'What is 2 + 2?', answer: '4' },
    { id: 2, question: 'What is the capital of France?', answer: 'Paris' },
    // Add more sample questions here
];

app.get('/api/questions', (req, res) => {
    res.json(questions);
});

app.get('/api/questions/:id', (req, res) => {
    const questionId = parseInt(req.params.id);
    const question = questions.find((q) => q.id === questionId);
    if (!question) {
        res.status(404).json({ error: 'Question not found' });
    } else {
        res.json(question);
    }
});

// Serve the index.html file for the root URL
const __dirname = path.dirname(new URL(
    import.meta.url).pathname);
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});