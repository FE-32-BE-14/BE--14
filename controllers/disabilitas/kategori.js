const { Kategori } = require('../../database/models');

const getKategori = async (req, res) => {
  try {
    const response = await Kategori.findAll({
      attributes: ['id', 'name'],
    });

    res.status(200).json(response);
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const getKategoriById = async (req, res) => {
  try {
    const kategori = await Kategori.findOne({
      attributes: ['id', 'name'],
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json(kategori);
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const deleteKategori = async (req, res) => {
  const kategori = await Kategori.findOne({
    where: {
      id: req.params.id,
    },
  });

  if (!kategori) return res.status(404).json({ msg: 'kategori not found!' });

  try {
    await Kategori.destroy({
      where: {
        id: kategori.id,
      },
    });
    res.status(200).json({ msg: 'Berhaasil dihapus!' });
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const updatekategori = async (req, res) => {
  const kategori = await Kategori.findOne({
    where: {
      id: req.params.id,
    },
  });

  if (!kategori) return res.status(404).json({ msg: 'kategori not found!' });

  const { name } = req.body;
  try {
    await Kategori.update(
      { name: name },
      {
        where: {
          id: kategori.id,
        },
      }
    );
    res.status(200).json({ msg: 'kategori updated!' });
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const createKategori = async (req, res) => {
  const { name } = req.body;

  try {
    const kategori = await Kategori.create({
      name: name,
    });
    res.status(201).json({ kategori: kategori, msg: 'Kategori created!' });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

module.exports = { getKategori, getKategoriById, deleteKategori, updatekategori, createKategori };
