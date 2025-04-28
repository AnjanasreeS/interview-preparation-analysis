
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../frontend')));

// Dummy analysis logic – replace with actual model logic
function analyzeText(text) {
  return `Analyzed text: "${text}" - Good structure and clarity.`;
}

function analyzeSpeech(text) {
  return `Speech was clear and articulate: "${text}". Work on pauses.`;
}

function analyzeGesture(data) {
  return `Gesture confidence level: ${data.confidence || 0.9}. Maintain eye contact.`;
}

// Routes for your analysis
app.post('/analyze/text', (req, res) => {
  const { answer } = req.body;
  const feedback = analyzeText(answer);
  res.json({ feedback });
});

app.post('/analyze/speech', (req, res) => {
  const { speechText } = req.body;
  const feedback = analyzeSpeech(speechText);
  res.json({ feedback });
});

app.post('/analyze/gesture', (req, res) => {
  const { gestureData } = req.body;
  const feedback = analyzeGesture(gestureData);
  res.json({ feedback });
});

// Routes to serve HTML files
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

app.get('/gesture', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index2.html'));
});

app.get('/speech', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index3.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
