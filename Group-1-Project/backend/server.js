const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const authRoutes = require('./routes/auth');
const enrollmentRoutes = require('./routes/enrollment');
const scheduleRoutes = require('./routes/schedule');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API Routes
app.use('/api', authRoutes);
app.use('/api', enrollmentRoutes);
app.use('/api', scheduleRoutes);

app.get('/', (req, res) => {
    res.send('Course Enrollment Backend is running');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
