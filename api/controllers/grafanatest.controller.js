const router = require('express').Router();
const promClient = require('prom-client');

const gauge = new promClient.Gauge({ name: 'grafanatest_gauge', help: 'amount of times the /grafanatest endpoint was hit' });
let incrementCount = 0;

router.get('/grafanatest', (req, res) => {
    gauge.inc(1);
    incrementCount += 1;
    res.json({ success: true, message: 'incremented grafanatest variable!', count: incrementCount });
});

module.exports = router;
