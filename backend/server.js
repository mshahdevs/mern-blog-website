const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/connectDB');
const app = express();
dotenv.config();
const port = process.env.PORT || 3000;
//connect mongoDB
connectDB();
app.use(cors());

// Or configure specific origins
app.use(
  cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get('/', (req, res) => {
  res.json({ server: 'Welcome to Blog website' });
});
//routes
app.use('/api/users', require('./routes/user'));
app.use('/api/posts', require('./routes/post'));

app.listen(port, () => {
  console.log(` server started at http://localhost:${port}`);
});
