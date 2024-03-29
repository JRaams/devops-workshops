const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    token: String,
    email: String,
    mobile: String,
    create_date: {
        type: Date,
        default: Date.now,
    },
});
// Export User model
const User = mongoose.model('user', userSchema);
module.exports = User;
module.exports.get = (callback, limit) => {
    User.find(callback).limit(limit);
};
