const express = require('express');
const router = express.Router();
const store = require('../data/store');

// SIGN UP
router.post('/signup', (req, res) => {
    const { fullName, email, password } = req.body;

    const existingUser = store.users.find(u => u.email === email);
    if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
    }

    store.users.push({ fullName, email, password });
    res.json({ message: 'Signup successful' });
});

// LOGIN
router.post('/login', (req, res) => {
    const { email, password } = req.body;

    const user = store.users.find(
        u => u.email === email && u.password === password
    );

    if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    res.json({ message: 'Login successful', user });
});

module.exports = router;
