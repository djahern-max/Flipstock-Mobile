const express = require('express');
const router = express.Router();
const config = require('config');
var IntrinioRealtime = require('intrinio-realtime');

router.get('/intrinio/:ticker', (req, res) => {
  try {
    // Create an IntrinioRealtime instance
    var ir = new IntrinioRealtime({
      api_key: `${config.get('intrinioApiKey')}`,
      provider: 'iex',
    });

    // Listen for quotes
    ir.onQuote((quote) => {
      console.log(quote);
    });

    // Join channels
    ir.join(`${req.params.ticker}`);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
