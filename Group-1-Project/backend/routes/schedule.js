const express = require('express');
const router = express.Router();
const store = require('../data/store');

// GET USER SCHEDULE
router.get('/my-schedule/:email', (req, res) => {
    const email = req.params.email;

    const userEnrollments = store.enrollments.filter(
        e => e.email === email
    );

    res.json(userEnrollments);
});

module.exports = router;
