const { Tujuan_Donasi } = require('../../database/models');
const cloudinary = require('../../cloudinary');

const getTujuandonasi = async (req, res) => {
  try {
    const response = await Tujuan_Donasi.findAll({
      attributes: ['id', 'name', 'deskripsi', 'img'],
    });

    res.status(200).json(response);
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const getTujuanDonasiById = async (req, res) => {
  try {
    const tujuandonasi = await Tujuan_Donasi.findOne({
      attributes: ['id', 'name', 'deskripsi', 'img'],
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json(tujuandonasi);
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const deleteTujuanDonasi = async (req, res) => {
  const tujuandonasi = await Tujuan_Donasi.findOne({
    where: {
      id: req.params.id,
    },
  });

  if (!tujuandonasi) return res.status(404).json({ msg: 'tujuandonasi not found!' });

  try {
    await Tujuan_Donasi.destroy({
      where: {
        id: tujuandonasi.id,
      },
    });
    res.status(200).json({ msg: 'Berhaasil dihapus!' });
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const updateTujuanDonasi = async (req, res) => {
  const tujuandonasi = await Tujuan_Donasi.findOne({
    where: {
      id: req.params.id,
    },
  });

  if (!tujuandonasi) return res.status(404).json({ msg: 'tujuandonasi not found!' });
  const { name, deskripsi } = req.body;
  const file = req.file;

  try {
    const img = await cloudinary.uploads(file.path, 'img');
    await Tujuan_Donasi.update(
      {
        name: name,
        deskripsi: deskripsi,
        img: img.secure_url,
      },
      {
        where: {
          id: tujuandonasi.id,
        },
      }
    );
    res.status(200).json({ msg: 'tujuandonasi updated!' });
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const createTujuanDonasi = async (req, res) => {
  const { name, deskripsi } = req.body;
  const file = req.file;

  try {
    const img = await cloudinary.uploads(file.path, 'img');

    const tujuanDonasi = await Tujuan_Donasi.create({
      name: name,
      deskripsi: deskripsi,
      img: img.secure_url,
    });
    res.status(201).json({ tujuanDonasi: tujuanDonasi, msg: 'Tujuan Donasi created!' });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

module.exports = { getTujuandonasi, createTujuanDonasi, getTujuanDonasiById, deleteTujuanDonasi, updateTujuanDonasi };
