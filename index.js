const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

app.use(cors());
const PORT = process.env.PORT || 3001;
console.log(`Server running on port ${PORT}`);
morgan.token('body', (req, res) => JSON.stringify(req.body));
app.use(
  morgan(':method :url :status :res[content-length] - :response-time ms :body')
);
app.use(express.json());
let entries = [
  {
    id: 1,
    name: 'Arto Hellas',
    number: '040-123456',
  },
  {
    id: 2,
    name: 'Ada Lovelace',
    number: '39-44-5323523',
  },
  {
    id: 3,
    name: 'Dan Abramov',
    number: '12-43-234345',
  },
  {
    id: 4,
    name: 'Mary Poppendick',
    number: '39-23-6423122',
  },
];

app.get('/api/persons', (req, res) => {
  res.json(entries);
});

app.get('/info', (req, res) => {
  res.send(
    `<p>Phonebook has info for ${entries.length} people</p>${new Date()}`
  );
});

app.get('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id);

  const entry = entries.find((entry) => entry.id === id);
  if (entry) {
    res.json(entry);
  } else {
    res.status(404).end();
  }
});

app.delete('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id);
  entries = entries.filter((entry) => entry.id !== id);
  res.status(204).end();
});

app.post('/api/persons', (req, res) => {
  const id = Math.floor(Math.random() * 1000);
  const body = req.body;
  const entry = { id, name: body.name, number: body.number };
  let exists = entries.some((entry) => entry.name === body.name);
  if (body.name === undefined || body.number === undefined) {
    return res.status(400).json({
      error: 'name or number missing',
    });
  } else if (exists) {
    return res.status(400).json({
      error: 'name already exists in the phonebook',
    });
  }

  entries.push(entry);
  res.json(entry);
});
