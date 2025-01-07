const express = require('express');
const path = require('path');

const app = express();

// Konfigurasi view engine EJS
app.set('view engine', 'ejs');
app.set('views', './views');

// Middleware untuk file statis
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/login', (req, res) => {
  res.render('auth/login');
});

app.get('/register', (req, res) => {
  res.render('auth/register');
});


app.get('/admin/adminWebinar', (req, res) => {
  res.render('adminPage/adminWebinar');
});

app.get('/listWebinar', (req, res) => {
  res.render('pages/listWebinar');
});

app.get('/createWebinar', (req, res) => {
  res.render('pages/createWebinar');
});

app.get("/detailWebinar", (req, res) => {
  res.render("pages/detailWebinar");
});

app.get('/userProfile', (req, res) => {
  res.render('pages/userProfile');
});

// Jalankan server
app.listen(3000, () => {
  console.log('Server berjalan di http://localhost:3000');
});