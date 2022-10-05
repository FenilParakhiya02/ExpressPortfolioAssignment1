var express = require('express');
var router = express.Router();

// get method with home page with slash  
 router.get('/', function(req, res, next) {
    res.render('home', { title: 'Home' });
  });

  //get home page while click on home 
  router.get('/home', function(req, res, next) {
    res.render('home', { title: 'Home' });
  });
  
  //for the register page 
  router.get('/register', function(req, res, next) {
    res.render('register', { title: 'Register' });
  });

  // login page connection and trying to use lambda functions from now 
  router.get('/login', (req, res, next) => {
    res.render('login', { title: 'Log In' });
  });
  

  // contact page connection 
router.get('/contact', (req, res, next) => {
    res.render('contact', { title: 'Contact Me' });
  });
  
  
  //services page connection 
  router.get('/services', (req, res, next) => {
    res.render('service', { title: 'Service' });
  });
  
  // product page connection 
  router.get('/projects', (req, res, next) => {
    res.render('projects', { title: 'Projects' });
  });
  
  // about page connection 
router.get('/about', (req, res, next)=> {
    res.render('about', { title: 'About Me' });
  });

  module.exports = router;
  