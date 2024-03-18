const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    content: {
      type: String,
      required: true
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      default: 5
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    photos: {
        type: String,
        required: false
    },
    userName: String,
    userAvatar: String
  }, {
    timestamps: true
  });

const concertSchema = new Schema({
    artist: {
        type: String, 
        required: true
    },
    tour: {
        type: String,
        required: true
    },
    venue: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }, 
    concertType: ['Concert', 'Festival', 'Speakeasy', 'DJ', 'Special Event'],
    reviews: [reviewSchema]

}, { timestamps: true
})

module.exports = mongoose.model('Concert', concertSchema);