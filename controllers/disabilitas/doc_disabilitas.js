const { Doc_Disabilitas, Users } = require('../../database/models');
const cloudinary = require('../../cloudinary');
const jwt = require('jsonwebtoken');

const getDocDisabilitas = async (req, res) => {
  try {
    const response = await Doc_Disabilitas.findAll({
      attributes: ['id', 'foto', 'sk_disabilitas'],
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

const getDocDisabilitasById = async (req, res) => {
  try {
    const data = await Doc_Disabilitas.findOne({
      attributes: ['id', 'foto', 'sk_disabilitas'],
      where: {
        id: req.params.id,
      },
      include: {
        model: Users,
        as: 'users',
        attributes: ['id', 'email'],
      },
    });

    res.status(200).json(data);
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const deleteDocDisabilitas = async (req, res) => {
  const data = await Doc_Disabilitas.findOne({
    where: {
      id: req.params.id,
    },
  });

  if (!data) return res.status(404).json({ msg: 'Doc Disabilitas not found!' });

  try {
    await Doc_Disabilitas.destroy({
      where: {
        id: data.id,
      },
    });
    res.status(200).json({ msg: 'Berhaasil dihapus!' });
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const updateDocDisabilitas = async (req, res) => {
  const data = await Doc_Disabilitas.findOne({
    where: {
      id: req.params.id,
    },
  });

  if (!data) return res.status(404).json({ msg: 'doc_disabilitas not found!' });

  try {
    const foto = await cloudinary.uploads(file[0].path, 'images');
    const sk_disab = await cloudinary.uploads(file[1].path, 'images');

    await Doc_Disabilitas.update(
      {
        foto: foto.secure_url,
        sk_disabilitas: sk_disab.secure_url,
      },
      {
        where: {
          id: data.id,
        },
      }
    );
    res.status(200).json({ msg: 'doc_disabilitas updated!' });
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const createDocDisabilitas = async (req, res) => {
  const file = req.files;
  try {
    const users = jwt.verify(req.headers['x-access-token'], process.env.ACCESS_TOKEN_SECRET);

    const foto = await cloudinary.uploads(file[0].path, 'images');
    const sk_disab = await cloudinary.uploads(file[1].path, 'images');

    const data = await Doc_Disabilitas.create({
      user_id: users.id,
      sk_disabilitas: foto.secure_url,
      foto: sk_disab.secure_url,
    });

    res.status(201).json({ msg: 'Doc created!', data: data });
  } catch (err) {
    res.status(400).json(err.message);
  }
};

module.exports = { getDocDisabilitas, getDocDisabilitasById, deleteDocDisabilitas, updateDocDisabilitas, createDocDisabilitas };
