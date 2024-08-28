const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/contact', (req, res) => {
  res.render('contact');
});

router.get('/mentions', (req, res) => {
  res.render('mentions');
});

router.get('/infos', (req, res) => {
  res.render('infos');
});

router.post('/contact', (req, res) => {
  // Handle contact form submission
  const { name, email, message } = req.body;
  console.log(`Message from ${name} (${email}): ${message}`);
  res.redirect('/');
});

module.exports = router;
