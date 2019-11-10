const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    image: {
        type: String,
    },
    quantity: {
        type: Number,
        required: true
    },
    due: {
        type: Date
    }
});

module.exports = Item = mongoose.model('items', ItemSchema);