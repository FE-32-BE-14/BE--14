const { Users } = require('../database/models');

const verifyUser = async (req, res, next) => {
  if (!req.session.userId) {
    return res.status(401).json({ msg: 'Mohon login dulu!' });
  }

  const user = await Users.findOne({
    where: {
      id: req.session.userId,
    },
  });

  if (!user) return res.status(404).json({ msg: 'User not found!' });

  next();
};

const adminOnly = async (req, res, next) => {
  const user = await Users.findOne({
    where: {
      id: req.session.userId,
    },
  });
  //   Cek apakah tidak cocok?
  if (!user) return res.status(404).json({ msg: 'User not found!' });
  if (user.email !== 'admin@gmail.com') return res.status(403).json({ msg: 'Akses terlarang!' });
  next();
};

module.exports = { adminOnly, verifyUser };
