const Concert = require('../models/concert');

module.exports = {
    index,
    show,
    new: newConcert,
    create
}

async function index(req, res) {
    const concerts = await Concert.find({});
    res.render('concerts/index', { title: 'Your Concerts', concerts});
}

async function show (req, res) {
    const concert = await Concert.findById(req.params.id);
    res.render('concerts/show', { title: 'concert details', concert });
}

function newConcert(req, res) {
    res.render('concerts/new', { title: 'add a concert', errorMsg: ''});
}

async function create(req, res) {
    try {
        const concert = await Concert.create(req.body);
        res.redirect(`/concerts/${concert._id}`);
    } catch (err) {
        console.log(err);
        res.render('concerts/new', { errorMsg: err.message});
    }
}