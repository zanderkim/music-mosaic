const Concert = require('../models/concert');

module.exports = {
    delete: deleteReview,
    create
};

async function deleteReview(req, res) {
    const concert = await Concert.findOne({ 'reviews._id': req.params.id, 'reviews.user':req.user._id });
    if (!concert) return res.redirect('/concerts');
    concert.reviews.remove(req.params.id);
        await concert.save();
    res.redirect(`/concerts/${concert._id}`);
}

async function create(req, res) {
    const concert = await Concert.findById(req.params.id);

    // add user-centric info
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;

    concert.reviews.push(req.body);
    try {
        await concert.save();
    } catch (err) {
        console.log(err);
    }
    res.redirect(`/concerts/${concert._id}`);
}