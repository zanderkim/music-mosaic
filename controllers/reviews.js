const Concert = require('../models/concert');

module.exports = {
    create
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