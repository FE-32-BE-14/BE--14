const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const { Sequelize } = require('sequelize');
const database = require('./database/config/database.json');
// const multer = require('./multer');
// const cloudinary = require('cloudinary').v2;
const session = require('express-session');
const cors = require('cors');

const dotenv = require('dotenv');
dotenv.config();

const db = require('./database/models');

const sequelize = new Sequelize(database.development.database, database.development.username, database.development.password, database.development);

try {
  db.sequelize.authenticate();
  console.log('Database Connect successfully...');
  console.log('Name :', sequelize.options.database);
  console.log('User :', sequelize.options.username);
  console.log('Pass :', sequelize.options.password);
} catch (err) {
  console.error(err, 'Unable to connect database XXX');
}

// cloudinary.config({
//   cloud_name: process.env.CLOUD_NAME,
//   api_key: process.env.API_KEY,
//   api_secret: process.env.API_SECRET,
// });

const indexRouter = require('./routes/index');
const routerAlamat = require('./routes/alamat');
const routerBeasiswa = require('./routes/beasiswa');
const routerUsers = require('./routes/users');
const routerKategori = require('./routes/kategori');
const routerDisabilitas = require('./routes/disabilitas');
const routerVerifikasiDisabilitas = require('./routes/verifikasiDisabilitas');
const routerDetailBeasiswa = require('./routes/detailBeasiswa');
const routerAgama = require('./routes/agama');
const routerTujuanDonasi = require('./routes/tujuanDonasi');
const routerPendonasi = require('./routes/pendonasi');
const routerTransaksiDonasi = require('./routes/transaksiDonasi');
const routerDonasi = require('./routes/donasi');
const routerIdentitas = require('./routes/identitas');
const routerAuth = require('./routes/auth');
// const routerMulter = require('./routes/cobaMulter');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(
  session({
    secret: 'reandomsecret',
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 60 * 60 * 1000, //1 Jam
      // secure: true,
    },
  })
);

app.use(
  cors({
    // agar frontend dapat mengirim req, cookie beserta kredensialnya
    credentials: true,
    // Domain yang dijikan untuk mengakases API kita
    origin: 'http://localhost:3000',
  })
);

app.use('/', indexRouter);
app.use(routerAuth);
app.use(routerAlamat);
app.use(routerBeasiswa);
app.use(routerUsers);
app.use(routerKategori);
app.use(routerDisabilitas);
app.use(routerVerifikasiDisabilitas);
app.use(routerDetailBeasiswa);
app.use(routerAgama);
app.use(routerTujuanDonasi);
app.use(routerPendonasi);
app.use(routerTransaksiDonasi);
app.use(routerDonasi);
app.use(routerIdentitas);
// app.use(routerMulter);

module.exports = app;
