require('dotenv').config({ path: './config.env' });
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

app.use(cors());

const morgan = require('morgan');
const user = require('./routes/user');
const match = require('./routes/matchDetails');
const admins = require('./routes/admins');
const auth = require('./routes/auth');
const config = require('config');
const { User } = require('./models/users');
if (app.get('env') === 'development') {
  app.use(morgan('tiny'));
}

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});
app.use(express.json());
app.use('/api/user', user);
app.use('/api/match_details', match);
// app.use("/api/photos", photos);
// app.use("/api/locations", locations);
app.use('/api/admins', admins);
app.use('/api/auth', auth);
if (!config.get('WEB_TOKEN_SECRET')) {
  console.log('FATAL: Web token private key not set!');
  process.exit(1);
}

const port = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;

// const sslServer = http2.createSecureServer(
//   {
//     key: fs.readFileSync("./openssl/key.pem"),
//     cert: fs.readFileSync("./openssl/certificate.pem"),
//     allowHTTP1: true,
//   },
//   app
// );

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log('Connected to MongoDB.');
    app.listen(port, () => {
      // perform a database connection when server starts
      console.log(`Server is running on port: ${port}`);
    });
  })
  .catch((err) => console.log('Could not connect to MongoDB ', err));
