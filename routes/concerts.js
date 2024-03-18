var express = require('express');
var router = express.Router();
const concertsCtrl = require('../controllers/concerts');
// Require the auth middleware
const ensureLoggedIn = require('../config/ensureLoggedIn');

// GET shows all user concerts
router.get('/', concertsCtrl.index);
// GET goes to add-a-concert page
router.get('/new', ensureLoggedIn, concertsCtrl.new);
// GET is the show id page for specific concert
router.get('/:id', concertsCtrl.show);
// Before posting and creating new concert log, ensure logged in
router.post('/', ensureLoggedIn, concertsCtrl.create);

module.exports = router;