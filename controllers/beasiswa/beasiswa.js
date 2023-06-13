const { Beasiswa } = require('../../database/models');

const getBeasiswa = async (req, res) => {
  try {
    const response = await Beasiswa.findAll({
      attributes: ['id', 'name', 'deskripsi', 'img'],
    });

    res.status(200).json(response);
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const getBeasiswaById = async (req, res) => {
  try {
    const beasiswa = await Beasiswa.findOne({
      attributes: ['id', 'name', 'deskripsi', 'img'],
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json(beasiswa);
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const deletebeasiswa = async (req, res) => {
  const data = await Beasiswa.findOne({
    where: {
      id: req.params.id,
    },
  });

  if (!data) return res.status(404).json({ msg: 'beasiswa not found!' });

  try {
    await Beasiswa.destroy({
      where: {
        id: data.id,
      },
    });
    res.status(200).json({ msg: 'Beasiswa Deleted' });
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const updatebeasiswa = async (req, res) => {
  const data = await Beasiswa.findOne({
    where: {
      id: req.params.id,
    },
  });

  if (!data) return res.status(404).json({ msg: 'beasiswa not found!' });
  const { name, deskripsi, img } = req.body;
  try {
    await Beasiswa.update(
      { name: name, deskripsi: deskripsi, img: img },
      {
        where: {
          id: data.id,
        },
      }
    );
    res.status(200).json({ msg: 'beasiswa updated!' });
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const createBeasiswa = async (req, res) => {
  const { name, deskripsi, img } = req.body;

  try {
    await Beasiswa.create({
      name: name,
      deskripsi: deskripsi,
      img: img,
    });
    res.status(201).json({ msg: 'Beasiswa created!' });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

module.exports = { getBeasiswa, getBeasiswaById, deletebeasiswa, updatebeasiswa, createBeasiswa };
