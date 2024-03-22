const Concert = require('../models/concert');

module.exports = {
    delete: deleteReview,
    create,
    edit: editReview,
    update: updateReview,
};

async function editReview(req, res) {
    console.log("editing");
    // const concert = await Concert.findOne({'reviews._id': req.params.id, 'reviews.user':req.user._id });
    const reviews = await Concert.findOne({'reviews._id': req.params.id, 'reviews.user':req.user._id });
    // if (!reviews) return res.redirect(`/concerts/${concert._id}`);
    res.render('reviews/editR', {title : 'editReview', reviews});
}

async function updateReview(req, res) {
    const concert = await Concert.findOne({'reviews._id': req.params.id, 'reviews.user':req.user._id });
    if(!concert) return res.redirect(`/concerts/${concert._id}`);
    concert.reviews[0].content = req.body.content;
    concert.reviews[0].rating = req.body.rating;
    concert.reviews[0].photos = req.body.photos;
    await concert.save();
    console.log(concert);
    res.redirect(`/concerts/${concert._id}`);
    }

async function deleteReview(req, res) {
    console.log("deleting");
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