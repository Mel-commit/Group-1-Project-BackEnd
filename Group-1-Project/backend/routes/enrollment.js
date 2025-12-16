const express = require('express');
const router = express.Router();
const store = require('../data/store');

// ENROLLMENT FORM (from index.html)
router.post('/submit-enrollment', (req, res) => {
    const { name, email, course } = req.body;

    store.enrollments.push({ name, email, course });

    res.json({
        message: 'Enrollment successful',
        enrollment: { name, email, course }
    });
});

module.exports = router;
