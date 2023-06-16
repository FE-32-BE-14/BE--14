const { Doc_Beasiswa, Users } = require('../../database/models');
const cloudinary = require('../../cloudinary');
const jwt = require('jsonwebtoken');

const getDocBeasiswa = async (req, res) => {
  try {
    const response = await Doc_Beasiswa.findAll({
      attributes: ['id', 'ijazah_terakhir', 'prestasi', 'createdAt', 'updatedAt'],
      include: {
        model: Users,
        as: 'users',
        attributes: ['id', 'email'],
      },
    });
    res.status(200).json(response);
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const createDocBeasiswa = async (req, res) => {
  const file = req.files;
  try {
    const users = jwt.verify(req.headers['x-access-token'], process.env.ACCESS_TOKEN_SECRET);

    const ijz = await cloudinary.uploads(file[0].path, 'images');
    const prts = await cloudinary.uploads(file[1].path, 'images');

    const data = await Doc_Beasiswa.create({
      user_id: users.id,
      ijazah_terakhir: ijz.secure_url,
      prestasi: prts.secure_url,
    });

    res.status(201).json({ msg: 'Beasiswa created!', data: data });
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const getDocBeasiswaById = async (req, res) => {
  try {
    const docbeasiswa = await Doc_Beasiswa.findOne({
      attributes: ['id', 'ijazah_terakhir', 'prestasi', 'createdAt', 'updatedAt'],
      where: {
        id: req.params.id,
      },
      include: {
        model: Users,
        as: 'users',
        attributes: ['id', 'email'],
      },
    });

    res.status(200).json(docbeasiswa);
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const deleteDocBeasiswa = async (req, res) => {
  const docbeasiswa = await Doc_Beasiswa.findOne({
    where: {
      id: req.params.id,
    },
  });

  if (!docbeasiswa) return res.status(404).json({ msg: 'docbeasiswa not found!' });

  try {
    await docbeasiswa.destroy({
      where: {
        id: docbeasiswa.id,
      },
    });
    res.status(200).json({ msg: 'Berhaasil dihapus!' });
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const updateDocBeasiswa = async (req, res) => {
  const file = req.files;
  // console.log(file);
  try {
    const doc = await Doc_Beasiswa.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (!doc) return res.status(404).json({ msg: 'Doc beasiswa not found!' });

    const ijz = await cloudinary.uploads(file[0].path, 'images');
    const prts = await cloudinary.uploads(file[1].path, 'images');

    await Doc_Beasiswa.update(
      {
        ijazah_terakhir: ijz.secure_url,
        prestasi: prts.secure_url,
      },
      {
        where: {
          id: doc.id,
        },
      }
    );
    res.status(201).json({ msg: 'Document Beasiswa updated!' });
  } catch (err) {
    res.status(201).json(err.message);
  }
};

module.exports = { getDocBeasiswa, getDocBeasiswaById, deleteDocBeasiswa, updateDocBeasiswa, createDocBeasiswa };
