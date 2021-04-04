const express = require('express');
const promBundle = require('express-prom-bundle');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const expressJwt = require('express-jwt');
const mongoose = require('mongoose');

const environment = require('./config/environment');
const apiRoutes = require('./api-routes');
const grafanaRoutes = require('./controllers/grafanatest.controller');

const app = express();
const metricsMiddleware = promBundle({
    includeMethod: true,
    includePath: true,
    promClient: {
        collectDefaultMetrics: {},
    },
});

app.use(metricsMiddleware);
app.use(
    cors({
        origin: 'http://0.0.0.0:8080',
    }),
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect to Mongoose and set connection variable
// MongoDB connection
mongoose.connect(environment.MONGO_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});
mongoose.Promise = global.Promise;

// On connection error
mongoose.connection.on('error', (error) => {
    // eslint-disable-next-line no-console
    console.log('Database error: ', error);
});

// On successful connection
mongoose.connection.on('connected', () => {
    // eslint-disable-next-line no-console
    console.log('Connected to database');
});

// addtional configuration when serving Angular SPA (static reource and Anugalr routing)
const allowedExt = ['.js', '.ico', '.css', '.png', '.jpg', '.woff2', '.woff', '.ttf', '.svg', '.webmanifest'];

// use JWTauth to secure the api, the token can be passed in the authorization header or querystring
app.use(
    expressJwt({
        secret: environment.JWT_SECRET,
        algorithms: ['HS256'],
        getToken: (req) => {
            if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
                return req.headers.authorization.split(' ')[1];
            }
            if (req.query && req.query.token) {
                return req.query.token;
            }
            return null;
        },
    }).unless({ path: ['/', '/grafanatest', '/user/authenticate', '/users'] }),
);

app.use(apiRoutes);
app.use(grafanaRoutes);

app.get('*', (req, res) => {
    if (allowedExt.filter((ext) => req.url.indexOf(ext) > 0).length > 0) {
        res.sendFile(path.resolve(`public/${req.url}`));
    } else {
        res.json({ message: 'what are you doing?' });
    }
});

const HOST = '0.0.0.0';
// start server
// Launch app to listen to specified port
const server = app.listen(process.env.EXPRESS_PORT || 5000, HOST, () => {
    const PORT = server.address().port;
    // eslint-disable-next-line no-console
    console.log(`Running  on http://${HOST}:${PORT}`);
});
