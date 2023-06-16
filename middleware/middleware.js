const { Users } = require('../database/models');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const verifyUser = async (req, res, next) => {
  // console.log(req.headers['x-access-token']);
  const users = jwt.verify(req.headers['x-access-token'], process.env.ACCESS_TOKEN_SECRET);
  // if (!req.session.userId) {
  //   return res.status(401).json({ msg: 'Mohon login dulu!' });
  // }
  if (!users) {
    return res.status(401).json({ msg: 'Mohon login dulu!' });
  }

  const user = await Users.findOne({
    where: {
      // id: req.session.userId,
      id: users.id,
    },
  });

  if (!user) return res.status(404).json({ msg: 'User not found!' });

  next();
};

const adminOnly = async (req, res, next) => {
  const users = jwt.verify(req.headers['x-access-token'], process.env.ACCESS_TOKEN_SECRET);
  const user = await Users.findOne({
    where: {
      id: users.id,
    },
  });
  //   Cek apakah tidak cocok?
  if (!user) return res.status(404).json({ msg: 'User not found!' });
  if (user.email !== 'admin@gmail.com') return res.status(403).json({ msg: 'Akses terlarang!' });
  next();
};

module.exports = { adminOnly, verifyUser };
