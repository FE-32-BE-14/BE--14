const { Users } = require('../../database/models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const Login = async (req, res) => {
  try {
    const user = await Users.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!user) return res.status(404).json({ msg: 'Email tidak ditemukan!' });

    const password = user.password;

    const match = await bcrypt.compare(req.body.password, password);

    if (!match) return res.status(400).json({ msg: 'Wrong Password!' });

    req.session.userId = user.id;

    const id = user.id;

    const email = user.email;

    // const accessToken = jwt.sign({ userId, email }, process.env.ACCESS_TOKEN_SECRET, {
    //   expiresIn: '60s',
    // });
    // const refreshToken = jwt.sign({ userId, email }, process.env.REFRESH_TOKEN_SECRET, {
    //   expiresIn: '1d',
    // });

    // await Users.update(
    //   { refresh_token: refreshToken },
    //   {
    //     where: {
    //       id: userId,
    //     },
    //   }
    // );

    res.status(200).json({ msg: 'Berhasil login!', id, email });
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const getMe = async (req, res) => {
  if (!req.session.userId) {
    return res.status(401).json({ msg: 'Silahkan login dulu!' });
  }

  const user = await Users.findOne({
    attributes: ['id', 'email'],
    where: {
      id: req.session.userId,
    },
  });
  // Cek apakah tidak ada data user berdasarkan email?
  if (!user) return res.status(404).json({ msg: 'Email tidak ditemukan!' });
  res.status(200).json(user);
};

const Logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) return res.status(400).json({ msg: 'Tidak dapat logout!' });
    res.status(200).json({ msg: 'Anda telah logout!' });
  });
};

module.exports = { getMe, Login, Logout };
