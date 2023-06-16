const { Detail_Beasiswa, Beasiswa, Users } = require('../../database/models');
const jwt = require('jsonwebtoken');

const getDetailBeasiswa = async (req, res) => {
  try {
    const response = await Detail_Beasiswa.findAll({
      attributes: ['id'],
      include: [
        {
          model: Users,
          as: 'users',
          attributes: ['id', 'email'],
        },
        {
          model: Beasiswa,
          as: 'beasiswa',
          attributes: ['id', 'name'],
        },
      ],
    });

    res.status(200).json(response);
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const getDetailBeasiswaById = async (req, res) => {
  try {
    const detailbeasiswa = await Detail_Beasiswa.findOne({
      attributes: ['id'],
      include: [
        {
          model: Users,
          as: 'users',
          attributes: ['id', 'email'],
        },
        {
          model: Beasiswa,
          as: 'beasiswa',
          attributes: ['id', 'name'],
        },
      ],
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json(detailbeasiswa);
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const deleteDetailBeasiswa = async (req, res) => {
  const detailbeasiswa = await Detail_Beasiswa.findOne({
    where: {
      id: req.params.id,
    },
  });

  if (!detailbeasiswa) return res.status(404).json({ msg: 'detailbeasiswa not found!' });

  try {
    await Detail_Beasiswa.destroy({
      where: {
        id: detailbeasiswa.id,
      },
    });
    res.status(200).json({ msg: 'Berhaasil dihapus!' });
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const updateDetailBeasiswa = async (req, res) => {
  const data = await Detail_Beasiswa.findOne({
    where: {
      id: req.params.id,
    },
  });

  if (!data) return res.status(404).json({ msg: 'detaildetailbeasiswa not found!' });

  const { beasiswa_id, user_id } = req.body;
  try {
    await Detail_Beasiswa.update(
      { beasiswa_id: beasiswa_id },
      {
        where: {
          id: data.id,
        },
      }
    );
    res.status(200).json({ msg: 'Detail beasiswa updated!' });
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const createDetailBeasiswa = async (req, res) => {
  const { beasiswa_id } = req.body;
  const users = jwt.verify(req.headers['x-access-token'], process.env.ACCESS_TOKEN_SECRET);

  try {
    await Detail_Beasiswa.create({
      user_id: users.id,
      beasiswa_id: beasiswa_id,
    });
    res.status(201).json({ msg: 'Detail beasiswa created!' });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

module.exports = { getDetailBeasiswa, getDetailBeasiswaById, deleteDetailBeasiswa, updateDetailBeasiswa, createDetailBeasiswa };
