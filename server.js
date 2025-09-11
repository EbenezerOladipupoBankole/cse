/* Required External Modules */
require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const expressLayouts = require('express-ejs-layouts');

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Set up Public folder / subfolder for static files
app.use(express.static(path.join(__dirname, 'public')));

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Express EJS Layouts
app.use(expressLayouts);
app.set('layout', 'layouts/layout');

// Index route
app.get("/", function(req, res) {
  res.render("index", { title: "Home" });
});

// Start the server
const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
