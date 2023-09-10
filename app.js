const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const mongoSanitize = require('express-mongo-sanitize');
const hpp = require('hpp');

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use(helmet());
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});
app.use('/api/', limiter);
app.use(mongoSanitize());
app.use(hpp());
module.exports = app;


app.use((req, res) => {
    res.status(404).json;
  });
  
  const port = 5500;
  
  app.listen(port, () => {
    console.log(`Server is running on port 5500`);
  });