const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// POST /movies/:id/reviews (create review for a movie)
router.post('/concerts/:id/reviews', ensureLoggedIn, reviewsCtrl.create);
// DELETE /reviews
router.delete('/reviews/:id', ensureLoggedIn, reviewsCtrl.delete);

// // Edit /reviews pages
router.get('/reviews/:id/edit', ensureLoggedIn, reviewsCtrl.edit);

// "/reviews/<%= reviews._id %>/edit">

// post review
router.put('/reviews/:id/edit', ensureLoggedIn, reviewsCtrl.update);

module.exports = router;