// const express = require('express'); 
// const router = express.Router();  


// //Static  routes
// // Set up Public folder / subfolder for static files
// app.use(express.static('public')); 
// app.use('/css', express.static(__dirname + 'public/css')); 
// app.use('/js', express.static(__dirname + 'public/js')); 
// app.use('/img', express.static(__dirname + 'public/imgaes'));

// module.exports = router; 

// // Index route
// app.get("/", function(req, res) {
//   res.render("index", { title: "Home"})
// })

const express = require('express');
const app = express();
const path = require('path');
const expressLayouts = require('express-ejs-layouts');

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Set up Public folder / subfolder for static files
app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(path.join(__dirname, 'public/css')));
app.use('/js', express.static(path.join(__dirname, 'public/js')));
app.use('/img', express.static(path.join(__dirname, 'public/images')));

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



