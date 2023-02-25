const express = require('express');
const { sayHello, uppercase, lowercase, firstCharacter, firstCharacters } = require('./strings');
const { add, subtract, multiply, divide, remainder } = require('./numbers');

const app = express();

app.use(express.json());

app.get('/strings/hello/:string', (req, res) => {
  res.status(200).json({ result: sayHello(req.params.string) });
});

app.get('/strings/upper/:string', (req, res) => {
  res.status(200).json({ result: uppercase(req.params.string) });
});

app.get('/strings/lower/:string', (req, res) => {
  res.status(200).json({ result: lowercase(req.params.string) });
});

// app.get('/strings/first-characters/:string', (req, res) => {
//
// });

app.get('/strings/first-characters/:string', (req, res) => {
  if (req.query.length) {
    res.status(200).json({ result: firstCharacters(req.params.string, req.query.length) });
  } else {
    res.status(200).json({ result: firstCharacter(req.params.string) });
  }
});

app.get('/numbers/add/:a/and/:b', (req, res) => {
  const a = Number(req.params.a);
  const b = Number(req.params.b);
  if (Number.isNaN(a) || Number.isNaN(b)) {
    return res.status(400).json({ error: 'Parameters must be valid numbers.' });
  }
  return res.status(200).json({ result: add(a, b) });
});

app.get('/numbers/subtract/:a/from/:b', (req, res) => {
  const a = Number(req.params.a);
  const b = Number(req.params.b);
  if (Number.isNaN(a) || Number.isNaN(b)) {
    return res.status(400).json({ error: 'Parameters must be valid numbers.' });
  }
  return res.status(200).json({ result: subtract(b, a) });
});

app.post('/numbers/multiply', (req, res) => {
  const a = Number(req.body.a);
  const b = Number(req.body.b);

  if (!req.body.a || !req.body.b) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  }
  if (Number.isNaN(a) || Number.isNaN(b)) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  }
  res.status(200).json({ result: multiply(a, b) });
});

app.post('/numbers/divide', (req, res) => {
  if (typeof req.body.a === 'undefined' || typeof req.body.b === 'undefined') {
    return res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  }
  const a = parseInt(req.body.a, 10);
  const b = parseInt(req.body.b, 10);
  if (isNaN(a) || isNaN(b)) {
    return res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  }
  if (b === 0) {
    return res.status(400).json({ error: 'Unable to divide by 0.' });
  }
  return res.status(200).json({ result: divide(a, b) });

  //   if (req.body.a === 0) {
  //     res.status(200).json({ result: 0 });
  //   } else if (req.body.b === 0) {
  //     res.status(400).json({ error: 'Unable to divide by 0.' });
  //   } else if (!req.body.a || !req.body.b) {
  //     res.status(400).send({ error: 'Parameters "a" and "b" are required.' });
  //   }
  //   const a = parseInt(req.body.a);
  //   const b = parseInt(req.body.b);
  //   if (isNaN(a) || isNaN(b)) {
  //     res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  //   } else {
  //     res.status(200).send({ result: divide(a, b) });
  //   }
});
app.post('/numbers/remainder', (req, res) => {
  if (req.body.b === 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  }
  if (typeof req.body.a === 'undefined' || typeof req.body.b === 'undefined') {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  }

  const a = parseInt(req.body.a, 10);
  const b = parseInt(req.body.b, 10);

  if (isNaN(a) || isNaN(b)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  }

  res.status(200).json({ result: remainder(req.body.a, req.body.b) });
});

module.exports = app;

// const a = Number.isNan(parseInt(req.body.a, 10));
// const b = Number.isNan(parseInt(req.body.b, 10));

// res.status(200).json({ result: multiply(a, b) });
// res.status(200).json(req);
// });
