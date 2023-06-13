const { Pendonasi } = require('../../database/models');

const getPendonasi = async (req, res) => {
  try {
    const response = await Pendonasi.findAll({
      attributes: ['id', 'name', 'no_telp'],
    });

    res.status(200).json(response);
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const getPendonasiById = async (req, res) => {
  try {
    const pendonasi = await Pendonasi.findOne({
      attributes: ['id', 'name', 'no_telp'],
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json(pendonasi);
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const deletePendonasi = async (req, res) => {
  const pendonasi = await Pendonasi.findOne({
    where: {
      id: req.params.id,
    },
  });

  if (!pendonasi) return res.status(404).json({ msg: 'pendonasi not found!' });

  try {
    await Pendonasi.destroy({
      where: {
        id: pendonasi.id,
      },
    });
    res.status(200).json({ msg: 'Berhaasil dihapus!' });
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const updatePendonasi = async (req, res) => {
  const pendonasi = await Pendonasi.findOne({
    where: {
      id: req.params.id,
    },
  });

  if (!pendonasi) return res.status(404).json({ msg: 'pendonasi not found!' });
  const { name, no_telp } = req.body;
  try {
    await Pendonasi.update(
      { name: name, no_telp: no_telp },
      {
        where: {
          id: pendonasi.id,
        },
      }
    );
    res.status(200).json({ msg: 'pendonasi updated!' });
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const createPendonasi = async (req, res) => {
  const { name, no_telp } = req.body;

  try {
    const pendonasi = await Pendonasi.create({
      name: name,
      no_telp: no_telp,
    });
    res.status(201).json({ pendonasi: pendonasi, msg: 'Pendonasi created!' });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

module.exports = { getPendonasi, getPendonasiById, deletePendonasi, updatePendonasi, createPendonasi };
