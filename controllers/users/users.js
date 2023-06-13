const { Users } = require('../../database/models');
const bcrypt = require('bcrypt');

const getUsers = async (req, res) => {
  try {
    const response = await Users.findAll({
      attributes: ['id', 'email', 'password', 'refresh_token'],
    });

    res.status(200).json(response);
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const getUsersById = async (req, res) => {
  try {
    const users = await Users.findOne({
      attributes: ['id', 'email', 'password', 'refresh_token'],
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json(users);
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const createUsers = async (req, res) => {
  const { email, password, confirmPassword } = req.body;

  const user = await Users.findOne({
    where: {
      email: email,
    },
  });

  if (user) return res.status(200).json({ msg: 'Email sudah terdaftar!' });

  if (password === confirmPassword) {
    const salt = await bcrypt.genSalt();

    const hashPassword = await bcrypt.hash(password, salt);

    try {
      const user = await Users.create({
        email: email,
        password: hashPassword,
      });
      res.status(201).json({ user: user, msg: 'Users created' });
    } catch (error) {
      res.status(400).json(error.massage);
    }
  } else {
    res.status(400).json({ msg: 'Confirm password false!' });
  }
};

const deleteUsers = async (req, res) => {
  const users = await Users.findOne({
    where: {
      id: req.params.id,
    },
  });

  if (!users) return res.status(404).json({ msg: 'users not found!' });

  try {
    await Users.destroy({
      where: {
        id: users.id,
      },
    });
    res.status(200).json({ msg: 'Berhaasil dihapus!' });
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const updateUsers = async (req, res) => {
  const users = await Users.findOne({
    where: {
      id: req.params.id,
    },
  });

  if (!users) return res.status(404).json({ msg: 'users not found!' });

  const { email, password } = req.body;
  const salt = await bcrypt.genSalt();

  const hashPassword = await bcrypt.hash(password, salt);

  try {
    await Users.update(
      { email: email, password: hashPassword },
      {
        where: {
          id: users.id,
        },
      }
    );
    res.status(200).json({ msg: 'users updated!' });
  } catch (err) {
    res.status(400).json(err.message);
  }
};

module.exports = { getUsers, getUsersById, deleteUsers, updateUsers, createUsers };
