if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line global-require
    require('dotenv').config();
}

const MONGO_URL = process.env.MONGO_URL || 'mongodb://admin:admin@localhost:27017/admin';
const JWT_SECRET = process.env.JWT_SECRET || 'test';

module.exports = {
    MONGO_URL,
    JWT_SECRET,
};
