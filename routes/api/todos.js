const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.json({ msg: 'todos api route works' });
});

module.exports = router;
