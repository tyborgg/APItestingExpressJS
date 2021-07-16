const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Supply Definition");
});

module.exports = router;