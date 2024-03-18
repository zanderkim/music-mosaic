const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// POST /movies/:id/reviews (create review for a movie)
router.post('/concerts/:id/reviews', ensureLoggedIn, reviewsCtrl.create);
// DELETE /reviews
// router.delete('/concerts/:id', ensureLoggedIn, reviewsCtrl.delete);

module.exports = router;