const express = require('express');
const router = express.Router();
const dataModel = require('../models/data-model.js');

router.get('/', function(req, res) {
  res.send("Ironfish Backend API")
});

router.get('/payout', function(req, res) {
  const page = req.query.page || 1;
  const limit = req.query.limit || 25;
  dataModel.paginationTable("payout", limit * (page - 1), limit, function(data) {
    res.send(data);
  });
});

router.get('/share', function(req, res) {
  const page = req.query.page || 1;
  const limit = req.query.limit || 25;
  dataModel.paginationTable("share", limit * (page - 1), limit, function(data) {
    res.send(data);
  });
});

module.exports = router;
