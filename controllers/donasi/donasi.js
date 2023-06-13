const { Donasi, Tujuan_Donasi, Pendonasi } = require('../../database/models');

const getDonasi = async (req, res) => {
  try {
    const response = await Donasi.findAll({
      attributes: ['id', 'nominal'],
      include: [
        {
          model: Tujuan_Donasi,
          as: 'tujuan_donasi',
          attributes: ['id', 'name'],
        },
        {
          model: Pendonasi,
          as: 'pendonasi',
          attributes: ['id', 'name'],
        },
      ],
    });

    res.status(200).json(response);
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const getDonasiById = async (req, res) => {
  try {
    const donasi = await Donasi.findOne({
      attributes: ['id', 'nominal'],
      include: [
        {
          model: Tujuan_Donasi,
          as: 'tujuan_donasi',
          attributes: ['id', 'name'],
        },
        {
          model: Pendonasi,
          as: 'pendonasi',
          attributes: ['id', 'name'],
        },
      ],
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json(donasi);
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const deleteDonasi = async (req, res) => {
  const donasi = await Donasi.findOne({
    where: {
      id: req.params.id,
    },
  });

  if (!donasi) return res.status(404).json({ msg: 'donasi not found!' });

  try {
    await Donasi.destroy({
      where: {
        id: donasi.id,
      },
    });
    res.status(200).json({ msg: 'Berhaasil dihapus!' });
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const updateDonasi = async (req, res) => {
  const donasi = await Donasi.findOne({
    where: {
      id: req.params.id,
    },
  });

  if (!donasi) return res.status(404).json({ msg: 'donasi not found!' });
  const { pendonasi_id, tujuan_id, nominal } = req.body;
  try {
    await Donasi.update(
      {
        pendonasi_id: pendonasi_id,
        tujuan_id: tujuan_id,
        nominal: nominal,
      },
      {
        where: {
          id: donasi.id,
        },
      }
    );
    res.status(200).json({ msg: 'donasi updated!' });
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const createDonasi = async (req, res) => {
  const { pendonasi_id, tujuan_id, nominal } = req.body;

  try {
    const donasi = await Donasi.create({
      pendonasi_id: pendonasi_id,
      tujuan_id: tujuan_id,
      nominal: nominal,
    });
    res.status(201).json({ donasi: donasi, msg: ' Donasi created!' });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

module.exports = { getDonasi, getDonasiById, deleteDonasi, updateDonasi, createDonasi };
